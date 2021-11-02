export default function BoilingVerdict ({celsius = 0}){
          if (celsius >= 100.00) {  
            return <p>Water Would Boil</p>;   
          } return <p>Water Would Not Boil</p>;
}
