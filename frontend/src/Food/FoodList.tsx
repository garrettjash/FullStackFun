import { useEffect, useState } from 'react';
import { MarriottFood } from '../types/MarriottFood';

function FoodList() {
  const [foodData, setFoodData] = useState<MarriottFood[]>([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      const rsp = await fetch('http://localhost:5150/MarriottFood');
      const f = await rsp.json();
      setFoodData(f);
    };

    fetchFoodData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Best Marriott Food</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Vendor Name</th>
            <th>Food Rating</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((f) => (
            <tr key={f.foodId}>
              <td>{f.eventName}</td>
              <td>{f.vendorName}</td>
              <td>{f.foodRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FoodList;
