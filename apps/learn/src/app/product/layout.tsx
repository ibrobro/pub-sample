

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-gradient-to-r from-[#EEF3F8] to-[#F6F8FB] min-h-[90vh] px-10 pt-[20vh] pb-40'>
      { children }
    </div>
  )
}