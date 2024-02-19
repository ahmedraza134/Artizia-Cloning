import TableImageOne from "../Images/tableimg-one.png";
import TableImageTwo from "../Images/tableimg-two.png";
import TableImageThree from "../Images/tableimg-three.png";
import TableImageFour from "../Images/tableimg-four.png";

const CollectionTable = () => {
  return (
    <>
      <div className="table-heading">
        <p>Top Collection</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Price</th>
            <th>24th Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={TableImageOne} // Replace with your circle image URL
                alt="Circle Image"
                style={{
                 
                  marginRight: "5px",
                  borderRadius: "50%",
                }}
              />
              Bull BTC Club
            </td>
            <td>500.59 ETH</td>
            <td>0.59 ETH</td>
          </tr>
          <tr>
            <td>
              <img
                src={TableImageTwo} // Replace with your circle image URL
                alt="Circle Image"
                style={{
                  marginRight: "5px",
                  borderRadius: "50%",
                }}
              />
              Bull BTC Club
            </td>
            <td>500.59 ETH</td>
            <td>0.59 ETH</td>
          </tr>
          <tr>
            <td>
              <img
                src={TableImageThree} // Replace with your circle image URL
                alt="Circle Image"
                style={{
                  marginRight: "5px",
                  borderRadius: "50%",
                }}
              />
              Bull BTC Club
            </td>
            <td>500.59 ETH</td>
            <td>0.59 ETH</td>
          </tr>
          <tr>
            <td>
              <img
                src={TableImageFour} // Replace with your circle image URL
                alt="Circle Image"
                style={{
                  marginRight: "5px",
                  borderRadius: "50%",
                }}
              />
              Bull BTC Club
            </td>
            <td>500.59 ETH</td>
            <td>0.59 ETH</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CollectionTable;
