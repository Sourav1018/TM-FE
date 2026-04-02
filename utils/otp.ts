/**
 * Handles the change event for an individual OTP input field.
 * Validates the input as a single digit and manages auto-focusing the next field.
 *
 * @param index - The 0-indexed position within the OTP array.
 * @param value - The raw string value from the input event.
 * @param currentOtp - The current array of OTP digits.
 * @param setOtp - Callback function to update the OTP state.
 */
export const handleOtpChange = (
  index: number,
  value: string,
  currentOtp: string[],
  setOtp: (newOtp: string[]) => void
) => {
  // Only allow single digits
  if (value.length <= 1 && /^\d*$/.test(value)) {
    const newOtp = [...currentOtp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus the next input if a digit was entered
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }
}

/**
 * Handles key down events for OTP inputs, specifically providing
 * backward navigation functionality when Backspace is pressed on an empty field.
 *
 * @param index - The 0-indexed position within the OTP array.
 * @param key - The keyboard key pressed (e.g., "Backspace").
 * @param currentDigitValue - The current value of the input field at this index.
 */
export const handleOtpKeyDown = (
  index: number,
  key: string,
  currentDigitValue: string
) => {
  // Move focus back if backspacing on an empty field
  if (key === "Backspace" && !currentDigitValue && index > 0) {
    const prevInput = document.getElementById(`otp-${index - 1}`)
    prevInput?.focus()
  }
}
