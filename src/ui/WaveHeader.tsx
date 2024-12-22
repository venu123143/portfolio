const WaveHeader = () => {
    return (
        <div className="md:block hidden absolute top-0 left-0 w-full h-64 overflow-hidden">
            <svg
                viewBox="0 0 1440 320"
                className="absolute top-0 left-0 w-full h-full"
                preserveAspectRatio="none"
            >
                <path
                    fill="#FDC435"
                    fillOpacity="1"
                    d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
        </div>
    );
};



export default WaveHeader;