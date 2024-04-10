import "./DonationForm.css"

export default function DonationForm({donations}) {
  return (
    <section className="form-container">
      <h1>You could be donation <span className="total-amount">#{donations.length+1}!</span></h1>
      <form>
        <label>
          Name
          <br></br>
          <br></br>
          <input className="name-input" placeholder="Your name.."/>
        </label>
        <label className="caption">
          Caption
          <br></br>
          <br></br>
          <input className="name-input" placeholder="Add a brief message..."/>
        </label>
        <label className="amount">
          Amount
          <input className="amount-input" placeholder="0"/>
        </label>
        <button className="donate" type="button">Donate!</button>
      </form>
      
    </section>
  )
}
