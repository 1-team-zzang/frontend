import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { useUserStore } from '@/entities/user'
import { Button, Form, FormField, FormLabel, Input, toast } from '@/shared/ui'
import { cn } from '@/shared/utils'

import { useUploadProfileImageMutation } from '../model'

import ImageEdit from './image-edit'

const ProfileEditFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, { message: '이름을 입력해주세요' }),
  profileUrl: z.union([z.string(), z.null()]),
})

type ProfileEditFormType = z.infer<typeof ProfileEditFormSchema>

export default function ProfileEditForm() {
  const { user } = useUserStore()

  const defaultValues: ProfileEditFormType = {
    email: user?.email ?? '',
    name: user?.name ?? '',
    profileUrl: user?.profileUrl ?? null,
  }

  const methods = useForm<ProfileEditFormType>({
    resolver: zodResolver(ProfileEditFormSchema),
    defaultValues,
  })

  const uploadProfileMutation = useUploadProfileImageMutation()

  const handleSubmit = (data: ProfileEditFormType) => {
    const { name, profileUrl } = data

    // public 경로인지 확인
    const isImageInPublic = profileUrl?.startsWith('/') || profileUrl?.includes(window.location.origin)

    uploadProfileMutation.mutate({ name, profileUrl: isImageInPublic ? profileUrl : null })
  }

  const currentName = methods.watch('name')
  const currentProfileUrl = methods.watch('profileUrl')

  const isModified = currentName !== defaultValues.name || currentProfileUrl !== defaultValues.profileUrl

  return (
    <Form methods={methods} onSubmit={handleSubmit} className="flex flex-col gap-6 m-0">
      <div className="flex justify-center">
        <ImageEdit
          imageUrl={user!.profileUrl}
          onChange={(newUrl: string | null) => methods.setValue('profileUrl', newUrl)}
        />
      </div>
      <FormField name="email">
        <FormLabel>이메일</FormLabel>
        <Input disabled />
      </FormField>
      <FormField name="name">
        <FormLabel>이름</FormLabel>
        <Input placeholder="이름을 입력해주세요" />
      </FormField>
      <Button
        type="submit"
        className={cn(
          'w-full',
          !isModified && 'opacity-50 cursor-not-allowed bg-gray-20 hover:bg-gray-20 active:bg-gray-20',
        )}
        onClick={(e) => {
          if (!isModified) {
            e.preventDefault()
            toast.error('이름이나 이미지를 변경해주세요')
          }
        }}
      >
        수정
      </Button>
    </Form>
  )
}
