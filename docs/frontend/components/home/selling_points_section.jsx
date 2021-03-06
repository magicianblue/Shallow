import React from 'react';

class SellingPointsSection extends React.Component {
    render() {
        return (
        <div>
            <section className="content-2 flex max-width m-t-70 m-w p-x-20" >
            <div className="column column1 flex-grow" >
                        <div id="graph-container" className="image bg-cover cu-tweenmax c-a-t-y "
                data-a-init="alpha:0"
                data-a-to="alpha:1, delay:0.3, duration:1.5"
                data-a-gap="200"
                >
                <img id="shallow-graph" className="box-shadow7" src="https://raw.githubusercontent.com/mvaleriani/Shallow/master/docs/app/assets/images/val_acc.png" alt=""/>
            </div>
            </div>
            <div className="column column2 flex-box-60p p-x-100 p-t-275 p-b-250" >
                <div className="cover bg1 cu-tweenmax" style={{marginRight:"-9999px"}}
                data-a-init="x:400, alpha:0"
                data-a-to="x:0, alpha:1, duration:0.7"
                data-a-gap="200"
                ></div>
                <div className="m-w-400">

                <div className="f-bold" >
                    <div className="line1 m-l-30- bg3 cu-tweenmax"
                    data-a-init="x:300, alpha:0, scaleX:1"
                    data-a-to="x:300, alpha:0.5, scaleX:50, ease:Expo.easeIn, duration:0.6"
                    data-a-to-2="x:0, alpha:1, scaleX:1, ease:Expo.easeOut, duration:1"
                    ></div>
                    <div className="cu-tweenmax"
                    data-a-init="alpha:0"
                    data-a-to="alpha:1, duration:0.9, delay:0.6, ease:Cubic.easeOut"
                    >
                    <div className="number t-30 f-light">1.</div>
                    <h3 className="t-18 color2 m-t-20">Model Accuracy</h3>
                    </div>
                </div>
                <p className="t-18 m-t-30 l-h-170" >
                    By fine-tuning the VGG16 model, we achieved 99% accuracy on Deep Fake detection. However, it should be noted that our model was trained on available data and may not be fully accurate in every use case. With that in mind, we aspire to continue teaching and developing our model if the menace of DeepFakes continues.
                </p>

                </div>
            </div>
                </section>

            <section className="content-10 flex">
                    <div className="image box-shadow7 cover bg-cover absolute cu-tweenmax" style={{ backgroundImage:'url(https://raw.githubusercontent.com/mvaleriani/Shallow/master/docs/app/assets/images/df_faces.png)', left:'32%', height: '700px', marginTop: '320px', marginLeft:'50px'}}
                    data-a-init="alpha:0"
                    data-a-to="alpha:.7, delay:0.3, duration:1.5"
                    data-a-gap="200"
                ></div>
                <div className="content m-w p-t-300 p-b-250 p-l-40 p-r-20">

                        <div className="texts m-w-400 m-l-0">
                            <div className="f-bold" >
                                <div className="line1 m-l-30- bg3 cu-tweenmax"
                                    data-a-init="x:300, alpha:0, scaleX:1"
                                    data-a-to="x:300, alpha:0.5, scaleX:50, ease:Expo.easeIn, duration:0.6"
                                    data-a-to-2="x:0, alpha:1, scaleX:1, ease:Expo.easeOut, duration:1"
                                ></div>
                                <div className="cu-tweenmax"
                                    data-a-init="alpha:0"
                                    data-a-to="alpha:1, duration:0.9, delay:0.6, ease:Cubic.easeOut"
                                >
                                    <div className="number t-30 f-light">2.</div>
                                    <h3 className="t-18 color2 m-t-20 ">Why Make Shallow?</h3>
                                </div>
                            </div>
                            <p className="t-18 m-t-30 l-h-170" >
                                Deepfakes are digital impersonation videos using deep learning technologies to copy a person's likeness onto another’s body. Surfacing in 2017, "deepfaking" is typically used in creating fake celebrity pornographic videos. Deepfakes have produced numerous scandals for the affected celebrities as well as various individuals who were targets of "revenge porn". Prior to our software, the only the method of determining a video's deepfake status was human vision (detecting artifacts is possible if the deepfake quality is subpar).
                            </p>
                        </div>

                </div>
            </section>

            <section className="content-4 app max-width m-w p-l-40 p-r-20 t-center" >
                <div className="cover bg bg1 cu-tweenmax" style={{marginRight:"-9999px"}}
                    data-a-init="x:400, alpha:0"
                    data-a-to="x:0, alpha:1, duration:0.7"
                    data-a-gap="200"
                ></div>

                    <div className="texts inline p-t-125 p-b-40 t-left">
                        <div className="f-bold" >
                            <div className="line1 m-l-30- bg3 cu-tweenmax"
                                data-a-init="x:300, alpha:0, scaleX:1"
                                data-a-to="x:300, alpha:0.5, scaleX:50, ease:Expo.easeIn, duration:0.6"
                                data-a-to-2="x:0, alpha:1, scaleX:1, ease:Expo.easeOut, duration:1"
                            ></div>
                            <div className="cu-tweenmax"
                                data-a-init="alpha:0"
                                data-a-to="alpha:1, duration:0.9, delay:0.6, ease:Cubic.easeOut"
                            >
                                <div className="number t-30 f-light">3.</div>
                                <h3 className="t-18 color2 m-t-20">Business Applications</h3>
                            </div>
                        </div>
                        <p className="t-18 m-t-30 l-h-170" >
                            As our goal is to create a reliable way to determine the authenticity of videos, we encourage anyone who has need to use our application. Our further plans are to expand accepted file-types, provide analytics on submitted files, and a chrome extension version. This type of program is necessary in any website that provides user hosted content, where DeepFakes can slip into the proper community content.
                        </p>
                    </div>

                <div className="image m-b-10- cu-tweenmax o-hidden"
                    data-a-init="y:200, alpha:0, zIndex:auto"
                    data-a-to="y:0, alpha:1, delay:0.3, duration:0.7"
                    data-a-gap="100"
                >
                        <img className="box-shadow7" id="buildings" src="https://raw.githubusercontent.com/mvaleriani/Shallow/master/docs/app/assets/images/buildings.png" className="m-w-1000" alt="" />
                </div>
            </section>
        </div>
        );
    }
}

export default SellingPointsSection;
