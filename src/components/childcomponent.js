const ChildComponent = ({ data }) => {
    return (
      <div>
        <h1>Data:</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ChildComponent;