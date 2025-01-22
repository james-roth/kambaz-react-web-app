export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <div id="wd-p-tag">
                    <h4>Paragraph Tag</h4>
                    <p id="wd-p-1"></p>
                    <p id="wd-p-2">
                        This is the first paragraph. The paragraph tag is used to format
                        vertical gaps between long pieces of text like this one.
                    </p>
                    <p id="wd-p-3">
                        This is the second paragraph. Even though there is a deliberate white
                        gap between the paragraph above and this paragraph, by default
                        browsers render them as one contiguous piece of text as shown here on
                        the right.
                    </p>
                    <p id="wd-p-4">
                        This is the third paragraph. Wrap each paragraph with the paragraph
                        tag to tell browsers to render the gaps.
                    </p></div>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                James's favorite recipes are:
                <ol id="wd-your-favorite-recipe">
                    <li>Pizza</li>
                    <li>Breakfast Tacos</li>
                    <li>Chili</li>
                </ol>
                My favorite books are:
                <ul id="wd-your-books">
                    <li>Abbadon's Gate</li>
                    <li>A Walk in the Woods</li>
                    <li>Persepolis Rising</li>
                    <li>Lord of the Rings</li>
                </ul>
            </div>
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>C++ (Why Not?)</td>
                            <td>2/17/25</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>C#</td>
                            <td>2/24/25</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>React</td>
                            <td>3/1/25</td>
                            <td>77</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>React pt. 2</td>
                            <td>3/11/25</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>The Return of CSS</td>
                            <td>3/18/25</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>MongoDB</td>
                            <td>3/25/25</td>
                            <td>83</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>Full Stack</td>
                            <td>4/28/25</td>
                            <td>90</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>84.42</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
                <h4>Image tag</h4>
                Loading an image from the internet: <br />
                <img id="wd-starship" width="400px"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
                <br />
                Loading a local image:
                <br />
                <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
            </div>
            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input type="password" value="123@#$asd" id="wd-text-fields-password" />
                    <br />
                    <label htmlFor="wd-text-fields-first-name">First name:</label>
                    <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
                    <label htmlFor="wd-text-fields-last-name">Last name:</label>
                    <input type="text" placeholder="Doe"
                        value="Wonderland"
                        title="The last name"
                        id="wd-text-fields-last-name" /><br />
                    <textarea cols={20} rows={25}
                        placeholder="Biography"
                        title="tooltip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sodales lectus. Quisque tortor elit, mollis a odio ac, porta elementum erat. Nullam sed quam et eros fringilla efficitur ut fermentum ligula. In convallis magna felis, vitae venenatis augue interdum sed. Nunc egestas congue erat vitae ultrices. Aenean vehicula tortor augue. Nullam porttitor nulla tortor, sagittis tristique tellus consequat ac. Integer cursus vel lectus ut laoreet. Mauris dignissim semper lorem sed venenatis. Duis ut dapibus ligula. Nullam dapibus a nisi nec rutrum.
                    </textarea>
                    <h4>Other HTML field types</h4>

                    <label htmlFor="wd-text-fields-email"> Email: </label>
                    <input type="email"
                        placeholder="hello@world.com"
                        id="wd-text-fields-email" /><br />

                    <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
                    <input type="number"
                        value="100000"
                        placeholder="10000"
                        id="wd-text-fields-salary-start" /><br />

                    <label htmlFor="wd-text-fields-rating"> Rating: </label>
                    <input type="range"
                        value="4"
                        max="5"
                        placeholder="Doe"
                        id="wd-text-fields-rating" /><br />

                    <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
                    <input type="date"
                        value="2000-01-21"
                        id="wd-text-fields-dob" /><br />
                </form>
            </div>
            <div>
                <h5 id="wd-buttons">Buttons</h5>
                <button type="button"
                    onClick={() => alert("Life is Good!")}
                    id="wd-all-good">
                    Hello World!
                </button>
            </div>
            <div>
                <h5 id="wd-radio-buttons">Radio buttons</h5>

                <label>Favorite movie genre (only select one):</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-comedy" />
                <label htmlFor="wd-radio-comedy">Comedy</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-drama" />
                <label htmlFor="wd-radio-drama">Drama</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-scifi" />
                <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
                <label htmlFor="wd-radio-fantasy">Fantasy</label>
            </div>
            <div>
                <h5 id="wd-checkboxes">Checkboxes</h5>
                <label>Favorite movie genres (select multiple):</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
                <label htmlFor="wd-chkbox-comedy">Comedy</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
                <label htmlFor="wd-chkbox-drama">Drama</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
                <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
                <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
            </div>
            <div>

                <h5>Select one</h5>
                <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
                <select id="wd-select-one-genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">
                        Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>

                <h5>Select many</h5>
                <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
                <select multiple id="wd-select-many-genre">
                    <option value="COMEDY" selected> Comedy          </option>
                    <option value="DRAMA">           Drama           </option>
                    <option value="SCIFI" selected> Science Fiction </option>
                    <option value="FANTASY">         Fantasy         </option>
                    <option value="HORROR">         Horror         </option>
                </select>
            </div>
            <h4>Anchor tag</h4>
            Please
            <a href="https://www.lipsum.com" id="wd-lipsum">click here</a>
            to get dummy text<br />
        </div >
    );
}
