import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Review = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbzKSYR_PtQXeDMSd7USY1mrCrAxgvpgjR_l3ywV4ZgGATSVHekOCTM1vAnZLg3uQuFS/exec')
            .then(response => response.json())
            .then(data => setData(data.data[id]));
    }, []);

    return (
        <div>
            {!data.title && <h1>Loading...</h1>}
            {data.title && <div className="review">
                <div className="review-banner section">
                    <img src={data.image} />
                    <div className="review-info">
                        <h1 className="gold">{data.title}</h1>
                        <h2>{data.artist}</h2>
                        <h2 className="chia">{data.score}/10</h2>
                        <p className="tan">reviewed by {data.author}</p>
                    </div>
                </div>

                <div className="review-content section">
                    <span className="tan quote">"{data.quote}"</span>
                    <p className="review-text beige">{data.text}</p>
                </div>
            </div>}
        </div>
    );
}

// const Review = ({ title, artist, author, score, url, image, quote, text }) => {
//     return (
//         <div className="review">
//             <div className="review-banner section">
//                 <img src="https://hips.hearstapps.com/hmg-prod/images/2945-4-ze-v2-w-cgi-fev17-layers-b-v2-6669edf4df1ca.jpg" />
//                 <div className="review-info">
//                     <h1 className="gold">DOPAMINE</h1>
//                     <h2>Normani</h2>
//                     <h2 className="chia">9.9/10</h2>
//                     <p className="tan">reviewed by Alana Iconicque</p>
//                 </div>
//             </div>

//             <div className="review-content section">
//                 <span className="tan quote">"Normani crafts an elaborate soundscape that is truly like no other."</span>
//                 <p className="review-text">Lorem ipsum dolor sit amet , consectetur adipiscing elit. Suspendisse ut ornare est. In sagittis venenatis neque sit amet consectetur. Vivamus pulvinar augue quam, nec congue mauris blandit id. Vestibulum faucibus massa quis massa aliquet, ut commodo metus varius. Nulla ut odio ut sem consectetur cursus. Nullam elementum ligula ut ipsum aliquam viverra. Nullam rhoncus, felis at ultricies imperdiet, dui risus ultricies augue, sit amet sollicitudin ex erat eget purus. Nullam tincidunt neque in justo malesuada gravida. Aliquam erat volutpat. Donec maximus, dolor vel egestas porta, sem neque vehicula tortor, vitae venenatis mauris dui in nunc. Nulla in erat ac ex hendrerit ultrices. Curabitur maximus lorem vel placerat pellentesque. Integer porta, libero vitae porttitor porttitor, neque turpis tristique ex, fringilla scelerisque mauris nulla interdum orci. Morbi nec felis eget est tincidunt blandit quis id felis. Duis lacinia et justo at porta. Cras ultricies id magna ornare fermentum. In facilisis, risus nec tempor euismod, ligula libero feugiat metus, non eleifend eros leo et metus. Morbi consequat, enim eget sagittis egestas, justo felis dapibus elit, ac efficitur ex urna eu elit. Proin fermentum est eget ligula tempus, eu eleifend odio posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dictum quam. Nunc pretium, risus in auctor faucibus, nulla libero accumsan leo, nec posuere quam est sit amet metus. Donec vehicula viverra eros, tincidunt semper justo gravida a. Maecenas cursus dui neque, ac varius lorem faucibus at. Fusce pulvinar, felis ut venenatis auctor, ipsum sem dignissim massa, sit amet venenatis est diam vitae risus. Donec ultricies mi sed condimentum consectetur. Integer consectetur lorem tellus, non volutpat nisi lacinia non. Morbi viverra efficitur magna sed eleifend. Ut leo lectus, pellentesque a velit nec, feugiat malesuada est. Nunc et nisl tincidunt, rutrum eros id, facilisis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et magna vitae risus placerat facilisis. Proin ultrices tellus at ullamcorper eleifend. Integer vel facilisis massa. Proin et erat nibh. Nam placerat leo elit, sit amet malesuada dui sagittis nec. Curabitur aliquam est augue, in gravida ipsum ultrices at. Curabitur ut sodales sem. Proin accumsan enim viverra eros fermentum scelerisque. Sed vehicula odio odio, ut venenatis velit imperdiet nec. Phasellus eu aliquam turpis, ut ultricies ante. Proin laoreet sapien vitae augue maximus, non sodales turpis vehicula. Sed semper tempus vehicula. Integer venenatis bibendum mauris, vitae pharetra nulla ultrices euismod. Aenean ullamcorper tortor nec odio lacinia, bibendum bibendum nisi aliquet. Pellentesque vitae vulputate enim. Curabitur nulla metus, ultricies ac nisl sit amet, dictum pellentesque arcu. Integer accumsan nunc sed eleifend lacinia. Nam luctus placerat efficitur. Duis aliquet purus nec quam posuere, non tristique risus lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nullam tempor nisl odio, in sodales elit bibendum vitae. Praesent ut sodales magna, egestas facilisis nisi. Aliquam ante elit, semper quis tempus vel, condimentum ut elit. Sed lacinia porttitor turpis at semper. Phasellus ultricies purus ac neque rhoncus, sit amet dignissim dui facilisis. Etiam lacinia in velit et sollicitudin. In feugiat non odio at sodales. Aliquam volutpat tempor scelerisque. Donec venenatis orci magna, mollis lacinia neque viverra a. Praesent fermentum nibh non leo elementum, at venenatis leo molestie. Praesent massa nisl, fermentum non arcu eget, laoreet fringilla justo. Sed lorem ante, tempor vitae sagittis vel, hendrerit vel dui. Curabitur fringilla facilisis fermentum. Aenean id arcu at mauris blandit aliquet sed id justo. Fusce eu lacus lectus. Nullam cursus blandit volutpat. In ut justo congue, auctor est sit amet, molestie risus. Pellentesque rutrum gravida tempus. Maecenas id nulla vel est scelerisque facilisis. Cras sed finibus enim. Quisque sollicitudin tincidunt erat sed gravida. Duis mauris massa, rhoncus ut nibh in, volutpat iaculis libero. Fusce magna nisi, euismod interdum ultrices vel, imperdiet vel quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis dolor nec tincidunt dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi et lacinia odio. Praesent nec scelerisque leo. Phasellus gravida ligula eget facilisis volutpat. Ut neque odio, efficitur et fermentum non, bibendum sed nulla. Etiam vitae eleifend leo. Nulla sed nunc quis ante malesuada feugiat. Mauris mollis elit id viverra porttitor. Suspendisse potenti. Duis vel velit sed augue accumsan venenatis eget a mi. Nulla vitae urna blandit orci efficitur blandit nec sit amet lectus. Aliquam vehicula gravida nisl a finibus. Nunc eu ligula at erat aliquam mollis. Donec augue urna, laoreet quis purus sed, consequat dictum neque. Mauris eu aliquet ante. Integer varius gravida lorem id faucibus. Sed consequat scelerisque ligula, nec dapibus dui consectetur convallis. Nullam sodales sollicitudin ex, in egestas dui volutpat sit amet. Suspendisse nec elementum dolor. Donec ac mattis felis, a ullamcorper odio. Nam fermentum sed magna in rutrum. Duis molestie rutrum dolor eu elementum. Sed ac euismod diam. In fermentum orci eget metus faucibus ullamcorper. Donec dictum condimentum nibh, ac euismod est tempus ac. Sed erat erat, hendrerit et imperdiet vel, placerat quis elit.</p>
//             </div>
//         </div>
//     );
// }

export default Review;