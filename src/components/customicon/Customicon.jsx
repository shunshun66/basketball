require('./Customicon.less');

function Customicon ({ type, className = '', size = 'md', ...restProps }){ 

    return (
        <svg
        className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}
        {...restProps}
        >
            <use xlinkHref={type} /> {/* svg-sprite-loader@0.3.x */}
        </svg>
    );
};


export default Customicon ;