import Clock from "./Clock";

export default function ClockList({ quantities = [] }) {
    
    console.log(quantities)
    return (
    <div>
      {quantities.map((key) => (
          <Clock key={key} />
      ))}
    </div>
  );
}
