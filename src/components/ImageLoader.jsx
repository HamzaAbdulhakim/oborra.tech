import { useState } from "react";
function ImageLoader({ src, alt, className }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`image-wrapper ${loaded ? "loaded" : ""}`}>
            
            {!loaded && (
                <div className="image-placeholder">
                    Loading...
                </div>
            )}

            <img
                src={src}
                alt={alt}
                className={className}
                onLoad={() => setLoaded(true)}
            />

        </div>
    );
}

export default ImageLoader;