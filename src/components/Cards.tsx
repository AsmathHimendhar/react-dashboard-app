type CardProps = {
    title: string;
    value: string;
  };
  
  const Card = ({ title, value }: CardProps) => {
    return (
      <div className="card">
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    );
  };
  
  export default Card;