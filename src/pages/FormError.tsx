// components/FormError.tsx
const FormError = ({ message }: { message?: string }) => {
    if (!message) return null;
    return <p className="text-sm text-red-500 mt-1">{message}</p>;
}


export default FormError;