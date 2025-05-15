// TagsInput.tsx
import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";

const TagsInput = ({ name }: { name: string }) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: "At least one tag is required" }}
            render={({ field: { value, onChange } }) => {
                const safeValue = Array.isArray(value) ? value : [];
                const [input, setInput] = useState("");

                const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
                    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
                        e.preventDefault();
                        const trimmed = input.trim();
                        if (!safeValue.includes(trimmed)) {
                            onChange([...safeValue, trimmed]);
                            setInput("");
                        }
                    }
                };

                const removeTag = (index: number) => {
                    const newTags = [...safeValue];
                    newTags.splice(index, 1);
                    onChange(newTags);
                };

                return (
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tags <span className="text-red-500">*</span>
                        </label>
                        <div className={`flex flex-wrap items-center border rounded px-2 py-2 min-h-[42px] 
        ${errors[name] ? "border-red-500" : "border-gray-300"} focus-within:ring-2 focus-within:ring-blue-500`}>

                            {safeValue.map((tag, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-gray-200 text-sm rounded px-2 py-1 mr-2 mb-2"
                                >
                                    <span>{tag}</span>
                                    <button
                                        type="button"
                                        className="ml-2 text-gray-600 hover:text-red-600"
                                        onClick={() => removeTag(index)}
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}

                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-grow border-none outline-none p-1 text-sm"
                                placeholder="Add a tag"
                            />
                        </div>
                        {errors[name] && (
                            <p className="text-sm text-red-500 mt-1">{errors[name]?.message?.toString()}</p>
                        )}
                    </div>
                );
            }}

        />
    );
};

export default TagsInput;
