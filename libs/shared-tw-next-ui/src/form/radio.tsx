

export interface RadioProps{
  text: string;
}


export function Radio({ text }: RadioProps) {
  return (
    <div className="flex items-center gap-2">
      <input type='radio' className="cursor-pointer" />
      <span className="text-sm cursor-progress">{ text }</span>
    </div>

  )
}