interface TextSpanProps {
     title: string
     text: string
}

const TextSpan: React.FC<TextSpanProps> = ({ text, title }) => {
     return (
          <div className="flex items-center gap-x-2">
               <h3 className="font-semibold text-sm text-white/80">{title}</h3>
               <p className="text-sm font-light text-white/80">{text}</p>
          </div>
     )
}

export default TextSpan