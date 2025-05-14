import { useEffect } from "react";
import { supabase } from "@/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const AuthEffect = () => {
  const navigate = useNavigate();
  const { setAuthenticatedUser } = useAuth();
  useEffect(() => {
    const insertUserProfile = async (user: User) => {
      // Check if profile already exists
      const { data: existing } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", user.id)
        .single();

      if (existing) return;

      const { error } = await supabase.from("profiles").insert({
        id: user.id,
        email: user.email,
        full_name: user.user_metadata.full_name,
        avatar_url: user.user_metadata.avatar_url,
      });

      if (error) {
        console.error("❌ Profile insert failed:", error);
      } else {
        console.log("✅ Profile inserted.");
      }
    };

    // Check session on load
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   if (session?.user) {
    //     insertUserProfile(session.user);
    //     const token = session.access_token;
    //     const refreshToken = session.refresh_token;

    //     // update the token details
    //     if (session.user) {
    //       setAuthenticatedUser({ id: session?.user?.id, email: session.user.email!, token, refreshToken });
    //     }
    //     navigate("/user/dashboard");
    //   }
    // });

    // Listen for auth events
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          insertUserProfile(session.user);
          const token = session.access_token;
          const refreshToken = session.refresh_token;

          // update the token details
          if (session.user) {
            setAuthenticatedUser({ id: session?.user?.id, email: session.user.email!, token, refreshToken });
          }

          navigate("/user/dashboard");

        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [navigate]);

  return null;
};

export default AuthEffect;
