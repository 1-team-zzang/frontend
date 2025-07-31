export interface UserProfileRequestData {
  name?: string
  profileUrl?: string | null
}

export interface PasswordChangeRequestData {
  currentPassword: string
  newPassword: string
}
