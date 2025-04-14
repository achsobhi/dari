const Stats = () => {
    const stats = [
      { number: '+200k', label: 'Annonces' },
      { number: '+4500k', label: 'Reservation' },
      { number: '+10k', label: 'Locataire' },
    ];
  
    return (
      <div className=" flex justify-between items-center gap-48 py-10 m-20 ">
        {stats.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-xl font-semibold">{item.number}</div>
            <div className="text-lg text-gray-700">{item.label}</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Stats;
  