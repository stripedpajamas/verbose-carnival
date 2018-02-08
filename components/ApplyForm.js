import React from 'react';


export default () => (
    <form class="apply-form">
        <div class="flex-container">
            <div>First Name</div>
            <div><input class="input-item" type="text" id="firstName" name="firstName" required /></div>
        </div>
        <div class="flex-container">
            <div>Last Name</div>
            <div><input class="input-item" type="text" id="firstName" name="firstName" required /></div>
        </div>
        <div class="flex-container">
            <div>Address</div>
            <div><input class="input-item" type="text" id="address" name="address" required /></div>
        </div>

        <div class="flex-container">
            <div>City</div>
            <div><input class="input-item" type="text" id="city" name="city" required /></div>
        </div>

        <div class="flex-container">
            <div>States</div>
            <select id="states" class="apply-states">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
        </div>
        <div class="flex-container">
            <div>Zipcode</div>
            <div><input class="apply-zipcode" type="text" pattern="[0-9]{5}" id="zipcode" name="zipcode" maxLength="5" title="Please enter 5-digits zipcode" required /></div>
        </div>
        <div class="flex-container">
            <div>SSN</div>
            <div><input class="input-item" type="password" pattern="[0-9]{9}" id="ssn" name="ssn" maxlength="9" title="Please enter 9-digits SSN" required />
            </div>
        </div>
        <center>
            <button class="apply-button">APPLY NOW</button>
        </center>
    </form >
)

// class PersonalInfo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: '' };
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     render() {
//         return (
//             <form>

//             </form>
//         );
//     }
// }
