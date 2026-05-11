import Card from "./Card";

function SummarySection({ summaryCards }) {

    return (

        <div>

            <h2> Restaurant Summary</h2>

            <div className="cards-container">

                {summaryCards.map((item, index) => (

                    <Card
                        key={index}
                        title={item.title}
                        value={item.value}
                    />

                ))}

            </div>

        </div>

    );
}

export default SummarySection;