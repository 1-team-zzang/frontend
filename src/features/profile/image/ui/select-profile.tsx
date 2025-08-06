export default function SelectProfile({
  src,
  alt,
  onChange,
}: {
  src: string
  alt: string
  onChange: (src: string) => void
}) {
  return (
    <button type="button" onClick={() => onChange(src)}>
      <img src={src} alt={alt} className="rounded-xl" />
    </button>
  )
}
