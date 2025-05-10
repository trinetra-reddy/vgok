export const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Validate form or a single/multiple fields
 * @param values - form values object
 * @param rules - validation rules per field
 * @param fieldsToCheck - single field, multiple fields, or undefined (entire form)
 * @returns error object { [field]: errorMessage }
 */
export const validateForm = (
    values: any,
    rules: any,
    fieldsToCheck?: any
) => {
    const errors: Record<string, string> = {};

    const fields =
        typeof fieldsToCheck === "string"
            ? [fieldsToCheck]
            : Object.keys(rules);


    for (const field of fields) {
        const value = values[field] ?? "";
        const rule = rules[field];

        if (!rule) continue;

        const label = capitalize(field);

        if (rule.required && !value.trim()) {
            errors[field] = rule.message || `${label} is required`;
            continue;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
            errors[field] =
                rule.patternMessage || `${label} format is invalid`;
            continue;
        }

        if (rule.min && value.length < rule.min) {
            errors[field] = `${label} must be at least ${rule.min} characters`;
        }
    }

    return errors;
};
export const getFieldClass = (error?: string) =>
    `w-full px-3 py-2 border rounded focus:outline-none ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
    }`;