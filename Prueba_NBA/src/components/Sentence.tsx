import { SentenceBD } from "../models/sentence.model";
interface SentenceProps {
    quote: SentenceBD;
}
export const Sentence = ({quote}:SentenceProps) => {
  return (
    <div>
        <p className="text-2xl font-bold text-gray-800">{quote.quote}</p>
        <p className="text-xl font-light text-gray-600">- {quote.author}</p>
    </div>
  )
}
