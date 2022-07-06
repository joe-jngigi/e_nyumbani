import React from 'react'

import { faqQuestions } from '../../data'
import { Questions } from '../utilsActions/imports'

function Faqsaccordion() {

/**I am affecting all buttons instead of one. Note to fix bug later */

  return (
    <section className='faqs-main my-3'>
        <main className="cent-container">
            <h3><span>/</span>&nbsp;FAQS</h3>
 
            <main className="faqs-content">
                <div className="faq ask-quiz">
                    <h4>Get answers to the frequently asked questions</h4>
                </div>
                <div className="faq ans-accord">
                  {
                    faqQuestions.map((question) =>{
                      return(
                        <Questions key={question.id} {...question}/>
                        
                      )
                    })
                  }
                </div>
            </main>      
        </main>
    </section>
  )
}
/**
 * let array1 = ['h', 'e', 'l', 'l', 'o'];
 * let array2 = [...array1];
 * console.log(array2);
 * ['h', 'e', 'l', 'l', 'o'] // output
 * 
 * It takes in an iterable (e.g an array) and
 * expands it into individual elements.
 * 
 * 
 * 
 */
export default Faqsaccordion