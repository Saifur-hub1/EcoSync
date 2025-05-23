
interface LabelProps {
    htmlFor: string;
}

const Label = ({htmlFor}: LabelProps) => {
    return (
        <label htmlFor={htmlFor} className=""></label>
    );
}

export default Label;
