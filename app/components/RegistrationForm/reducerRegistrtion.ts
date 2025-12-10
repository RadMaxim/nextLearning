interface FormState {
    formData: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    };
    error: string;
    success: string;
}
export const initialState: FormState = {
    formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
    error: "",
    success: "",
};
type Action =
    | { type: "CHANGE"; field: string; value: string }
    | { type: "ERROR"; message: string }
    | { type: "SUCCESS"; message: string }
    | { type: "RESET" };


export function reducer(state: FormState, action: Action): FormState {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                formData: { ...state.formData, [action.field]: action.value },
            };
        case "ERROR":
            return { ...state, error: action.message, success: "" };
        case "SUCCESS":
            return { ...state, success: action.message, error: "" };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}