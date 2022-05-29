import React from 'react'
import './style.scss'
import { FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare, FaPlusSquare, FaAngleDoubleRight } from 'react-icons/fa'
import { AiOutlineFolder, AiOutlineUser } from 'react-icons/ai'

const BlogList = () => {
    return (
        <>
            <div className='blogList-container'>
                <div className='blog-container'>
                    <div className='blog-img-container'>
                        <img src='http://unlimited-12ca8.kxcdn.com/media/blog/cache/276x/magefan_blog/blog022.jpg'></img>
                    </div>
                    <div className='blog-content-container'>
                        <div className='blog-date'>Dec 15 2021</div>
                        <a className='blog-title'>Dining and Living Room Decor Ideas</a>
                        <div className='blog-tags-container'>
                            <div><span><AiOutlineUser /></span>Codezon Unlimited</div>
                            <div><span ><AiOutlineFolder /></span>Decoration</div>
                        </div>
                        <p className='blog-description'>
                            The reports of the armed robbery of Kim Kardashian in Paris — with millions of dollars of jewelry stolen — reminded me of advice my late business partner used to give to customers. Always insure your jewelry, she would tell people who were nervous about getting a sizable diamond. If (“God forbid!” she’d exclaim) you’re threatened with physical harm, give up the jewelry without hesitation. Keep yourself safe. File a police report. Then, she’d say, if the jewelry can’t be recovered, “We’ll use the insurance money to make you a bigger and better ring.” Kim might be an exception when it comes to that last step — at least when it comes to engagement-ring diamonds — it’s difficult to go bigger than Kim’s 20-carat Lorraine Schwartz ring and still have the use of one’s hand. Embed from Getty Images However, she could go from a skinny band to something more substantial. But that’s not important right now! No one — including Kim — should spend too much time mourning for jewelry. I admit that it can be hard to let go because jewelry is an unusually meaningful possession. (That’s what I like about it.) It’s often purchased to mark a special occasion: a graduation, an engagement, a marriage, the addition of a child to your family. It gets passed down from generation to generation. You expect that your good pieces will go to someone important to you, and be important to them too. Like diamond connoisseur Elizabeth Taylor said to — guess who? — Kim Kardashian in 2011, “Size does matter, but so does the size of the emotion behind it.” Elizabeth had big diamonds and big emotions in her life. The fifth and sixth of her eight husbands — actor Richard Burton (the passionate couple divorced, remarried, and divorced again) — bought her a 69.42-carat pear-shaped diamond that she wore in a necklace to the Oscars in 1970.
                        </p>
                        <div className='blog-share'>
                            <button>Read More <span><FaAngleDoubleRight /></span></button>
                            <div className='shareButtons'>
                                <a style={{ color: '#3B5998' }}><FaFacebookSquare /></a>
                                <a style={{ color: '#1DA1F2' }}><FaTwitterSquare /></a>
                                <a style={{ color: '#848484' }}><FaEnvelopeSquare /></a>
                                <a style={{ color: '#FF6550' }}><FaPlusSquare /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogList