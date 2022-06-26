export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validatableInput: Validatable) {
  let isValid = true;
  console.log({ validatableInput });
  const { value } = validatableInput;

  if (validatableInput.required) {
    isValid = isValid && value.toString().trim().length !== 0;
  }
  if (validatableInput.minLength != null) {
    isValid = isValid && value.toString().length >= validatableInput.minLength;
  }
  if (validatableInput.maxLength != null) {
    isValid = isValid && value.toString().length < validatableInput.maxLength;
  }
  if (validatableInput.min != null && typeof value === "number") {
    console.log("Minimum: " + validatableInput.min);
    isValid = isValid && value >= validatableInput.min;
  }
  if (validatableInput.max != null && typeof value === "number") {
    isValid = isValid && value <= validatableInput.max;
  }

  return isValid;
}
