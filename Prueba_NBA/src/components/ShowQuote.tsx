import { useState,useEffect } from 'react';
import { SentenceBD } from '../models/sentence.model';
import { Sentence } from './Sentence';

export const ShowQuote = () => {
    const [quote, setQuote] = useState<SentenceBD>({
        quote: '',
        author: '',
    });
    const getQuote = async () => {
        const response = await fetch('https://mach-eight.uc.r.appspot.com');
        const data = await response.json();
        setQuote(data[0]);      
    }
    useEffect(() => {
        getQuote();
    }, [])
  return (
    <div>
        <Sentence quote={quote}/>
        <button onClick={getQuote} 
        className="bg-blue-500 text-white font-bold px-4 py-2 rounded mt-4">
            Get Quote</button>
    </div>
  )
}
