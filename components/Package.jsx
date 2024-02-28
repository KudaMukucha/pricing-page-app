export const Package = ({ data }) => {
  const { title, price, features, isRecommended } = data;
  return (
    <div className={isRecommended ? `package recommended` : `package`}>
        {isRecommended && <p className="highlighted">Recommended</p>}
      <h4 className="package-name">{title}</h4>
      <h3 className="package-price">
        $<span className="price">{price}</span>/mo
      </h3>
      <div className="features">
       {
        features.map((feature,i)=>{
            return(
                <p key={i}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
         {feature}
        </p>
            )
        })
       }
      </div>
      <button className={isRecommended ? `recommended button` : "package-button"}>Sign Up Today</button>
    </div>
  );
};
