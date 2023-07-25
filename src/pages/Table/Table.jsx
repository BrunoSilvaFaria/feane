import { Conteiner, Form} from "./styles";
import { ButtonMenu } from "../../components/Button/styles";

function Table() {
  return (
    <Conteiner>
      <Form>
        <div className="conteiner">
          <div className="display">
            <div className="inputs">
          <h1>Book A Table</h1>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="email" placeholder="Your Email" />
              <select name="book" id="book" value="How Many persons?">
                <option value="How many Persons?">How many Persons?</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input type="date" />
              <ButtonMenu className="btn">Book Now</ButtonMenu>
            </div>
            <div className="iframe">
              <iframe
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=450&amp;height=345&amp;hl=en&amp;q=USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </Form>
    </Conteiner>
  );
}

export default Table