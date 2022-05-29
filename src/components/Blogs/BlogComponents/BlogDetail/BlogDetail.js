import React from 'react'
import './style.scss'
import { FaClock, FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare, FaPlusSquare, FaAngleDoubleRight } from 'react-icons/fa'
import { AiOutlineFolder, AiOutlineUser } from 'react-icons/ai'

const BlogDetail = () => {
    return (
        <>
            <div className='blog-detail-container'>
                <div className='blog-detail-img-container'>
                    <img src='http://unlimited-12ca8.kxcdn.com/media/blog/cache/1100x/magefan_blog/book3.jpg' />
                    <div className='buttons-container'>
                        <div className='date-tags'>
                            <div className='date'>
                                <span><FaClock /></span>
                                Dec 15 2021
                            </div>
                            <div className='tags'>
                                <div><span><AiOutlineUser /></span>Codezon Unlimited</div>
                                <div><span ><AiOutlineFolder /></span>Decoration</div>
                            </div>
                        </div>
                        <div className='share-buttons'>
                            <a style={{ color: '#3B5998' }}><FaFacebookSquare /></a>
                            <a style={{ color: '#1DA1F2' }}><FaTwitterSquare /></a>
                            <a style={{ color: '#848484' }}><FaEnvelopeSquare /></a>
                            <a style={{ color: '#FF6550' }}><FaPlusSquare /></a>
                        </div>
                    </div>
                </div>
                <div className='blog-content-container'>
                    The main living areas, whether they are separate rooms or combined in an open-concept space, set the stage for life with family and friends. Create the Palette You can see colors, patterns and metal finishes online, but digital images are mere approximations of what the real things look like. Wherever possible, order color chips, fabric swatches and material samples to be sure finished products will meet your expectations. “You can order samples from most vendors, and it’s always best,” said Mr. Kleinberg. “Some colors blend together,” when viewed on a screen, he added, and it can be difficult to differentiate cool and warm tones. Don’t just look at the samples in isolation. Pin them to a board or put them in a tray to see how well they work together. “All greens play nicely together,” said Mr. Kleinberg. “All blues fight.” Putting samples side by side is the way to see if different colors and patterns will live in harmony or tension. Ms. Hampton sometimes goes one step farther. “When we’re working on a fabric scheme, we’ll put the fabric on the copier, reduce it, cut it into the right shape for the floor plan and paste it down,” she said, “so we can see how the various fabrics spread through the room.” Treat the Walls Paint colors are notorious for appearing different hues in different light conditions (and seeming to change between the paint store to home). This effect is only amplified once you slather it on four walls. For that reason, it’s never a good idea to commit to a paint color when you first see the chip in a store. Look at the largest chip you can get in the room you plan to paint, at a minimum. Better yet, paint large sample patches on walls or on boards that can be moved around and view them at different times of day.
                </div>
            </div>
        </>
    )
}
export default BlogDetail