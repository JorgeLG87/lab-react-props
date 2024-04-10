export default function RecentDonations({donations}) {
  const {name, amount, caption} = donations;
  return (
    <>
      <h1>Recent Donations</h1>
      {donations.map(obj => <><p className="names">{obj.name} donated ${obj.amount}</p><p>{obj.caption}</p></>)}
    </>
  )
}
