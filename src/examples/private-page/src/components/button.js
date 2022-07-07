const typeStyles = {
    primary: {
        background: 'green',
        color: '#000'
    },
    danger: {
        background: 'darkred',
        color: '#fff'
    },
};

export const Button = ({ onClick, type = 'primary', children, disabled, padding }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        style={{ ...typeStyles[type], padding, borderRadius: '5px', cursor: 'pointer' }}
    >
        {children}
    </button>
);
