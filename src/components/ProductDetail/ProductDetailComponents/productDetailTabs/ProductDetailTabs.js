import React, { useState } from 'react'
import './style.scss'
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa'
const ProductDetailTabs = () => {
    const [tabState, setTabState] = useState(1);
    const [contentDown, setContentDown] = useState(false);
    return (
        <>
            <div className='product-detail-tabs-container'>
                <div className='header-container'>
                    <h2
                        onClick={() => (setTabState(1))}
                        className={tabState === 1 ? 'active' : ''}>
                        DETAILS
                    </h2>
                    <h2
                        onClick={() => (setTabState(2))}
                        className={tabState === 2 ? 'active' : ''}>
                        REVIEWS
                    </h2>
                    <h2
                        onClick={() => (setTabState(3))}
                        className={tabState === 3 ? 'active' : ''}>
                        CUSTOM TAB 1
                    </h2>
                    <h2
                        onClick={() => (setTabState(4))}
                        className={tabState === 4 ? 'active' : ''}>
                        CUSTOM TAB 2
                    </h2>
                </div>
                <div className='tabs-detail'>
                    <div className={tabState === 1 ? 'tab-1-content active' : 'tab-1-content'} style={{ maxHeight: `${contentDown ? 1500 : 400}px` }}>
                        <h2>Available while supplies last.<br />
                            D105 17.5-HP Single-Cylinder Automatic 42-in Lawn Tractor</h2>
                        <ul>
                            <li>
                                Easy one-pedal speed operation with forward and reverse lever
                            </li>
                            <li>The Edge™ cutting system provides superior performance and a precise, even cut with 1/4-in cut height adjustment
                            </li>
                            <li>Operator seat with heat resistant surface and easy in-seat adjustment provides greater operator comfort
                            </li>
                            <li>Powerful engine with full-pressure lubrication for long life
                            </li>
                            <li>Automatic transmission makes it easy to choose the exact travel speed for each operating condition
                            </li>
                            <li>Manual blade engagement
                            </li>
                            <li>Full-length welded steel frame for reliability
                            </li>
                            <li>Features headlights, grease fittings, and a cup holder
                            </li>
                            <li>Full-length welded steel frame for reliability
                            </li>
                            <li>Includes engine oil
                            </li>

                        </ul>
                        <h2>
                            Specifications:
                        </h2>
                        <ul>
                            <li>Cut Width: 42-in</li>
                            <li>Number of Blades: 2</li>
                            <li>Maximum Forward Speed: 5.5 MPH</li>
                            <li>Maximum Reverse Speed: 3.2 MPH</li>
                            <li>Turning Radius: 18-in</li>
                            <li>Front Wheel Size: 15-in</li>
                            <li>Rear Wheel Size: 20-in</li>
                            <li>Deck Wheel Size: 5-in</li>
                            <li>Number of Deck/Anti-Scalp Wheels: 2</li>
                            <li>Deck Gauge: 13</li>
                            <li>Cutting Range/Yard Size: 1 to 2 acres</li>
                            <li>Discharge Location: Side</li>
                            <li>Ammeter: No</li>
                            <li>Bagger Capable: Yes (2-bin bagger sold separately)</li>
                            <li>Hour Meter Type: Meter with service reminder</li>
                            <li>Mulching Capable: Yes (kit sold separately)</li>
                            <li>Operator-Controlled Mow-in-Reverse: Yes</li>
                            <li>Steering Type: Standard wheel</li>
                        </ul>
                        <h2>
                            Engine Specifications:
                        </h2>
                        <ul>
                            <li>Brand: Briggs & Stratton</li>
                            <li>Displacement: 500cc</li>
                            <li>Horsepower: 17.5</li>
                            <li>Type: Single cylinder</li>
                            <li>Transmission Type: Foot pedal automatic</li>
                            <li>Fuel Capacity: 2.4-gal</li>
                            <li>Oil Capacity: 48-oz</li>
                            <li>Recommended Oil: 10W30</li>
                            <li>Oil Filter Type: Spin-on</li>
                        </ul>
                        <div className='table'>
                            <div></div>
                            <div style={{ fontWeight: 500 }}>Materials:</div>
                            <div>Steel, Cast Iron Front Axle</div>
                            <div></div>
                            <div style={{ fontWeight: 500 }}>Warranty:</div>
                            <div>2 Year Limited or 120 Hours</div>
                        </div>


                    </div>
                    <div className={tabState === 1 ? 'btn-wrapper active' : 'btn-wrapper'}>
                        {contentDown ? <button onClick={() => (setContentDown(!contentDown))}><FaRegMinusSquare />&nbsp;LESS VIEW</button> : <button onClick={() => (setContentDown(!contentDown))}><FaRegPlusSquare />&nbsp;MORE VIEW</button>}

                    </div>
                    <div className={tabState === 2 ? 'tab-2-content active' : 'tab-2-content'}></div>
                    <div className={tabState === 3 ? 'tab-3-content active' : 'tab-3-content'}>
                        <h2>Custom Tab 1</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </div>
                    <div className={tabState === 4 ? 'tab-4-content active' : 'tab-4-content'}>
                        <h2>Custom Tab 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetailTabs