import React, { useState } from 'react';

export default function Main() {
    const [link, setLink] = useState('');
    const [result, setResult] = useState([]);
    const [isCopy, setIsCopy] = useState('');
    const [isEmpty, setEmpty] = useState(false);

    async function getData(link) {
        try {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`);
            const data = await res.json();
            setResult(result => [...result, { dataRes: data.result.short_link, title: link }]);
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    const submit = (e) => {
        e.preventDefault();
    
        if (link === '') {
            setEmpty(true);
        } else {
            getData(link);
        }
    }

    const Copy = (item) => {
        navigator.clipboard.writeText(item);
        setIsCopy(item);
    }

    return (
        <main>
            <div className="container">
                <form className="bg-form" onSubmit={submit}>
                    <>
                        <input required className={isEmpty ? 'withoutData' : ''} onChange={(e) => setLink(e.target.value)} type="text" placeholder='Shorten a link here...' />
                        <button type='submit' className="btn btn-primary btn-sorten">
                            Shorten It!
                        </button>
                    </>
                </form>
            </div>


            <section className="advanced_statistics">
                <div className="container">
                    {result ? result.map((item, index) => {
                        return (
                            <div key={index} className="results">
                                <p>
                                    <span>{item.title}</span>

                                    <span className="short_link">
                                        <a className='link' href={item.dataRes}>{item.dataRes}</a>

                                        <button onClick={() => Copy(item.dataRes)} className="btn btn-primary btn-copy" style={isCopy === item.dataRes ? { backgroundColor: 'var(--clr-very-dark-violet)' } : { backgroundColor: 'var(--clr-cyan)' }}>
                                            {isCopy === item.dataRes ? 'Copied!' : 'Copy'}
                                        </button>
                                    </span>
                                </p>
                            </div>
                        )
                    }) : null}

                    <h3 className="title_advanced">Advanced Statistics</h3>

                    <p className='subtitle_advanced' >
                        Track how your links are performing across the web with <br /> our advanced statistics dashboard.
                    </p>

                    <div className="boxes">
                        <div className="box box-1">
                            <div className="img_box">
                                <img src="/images/icon-brand-recognition.svg" alt="brand" />
                            </div>

                            <div className="content-box">
                                <h3>Brand Recognition</h3>

                                <p>
                                    Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                                </p>
                            </div>
                        </div>

                        <div className="box box-2" style={{ marginTop: '2rem' }}>
                            <div className="img_box">
                                <img src="/images/icon-detailed-records.svg" alt="brand" />
                            </div>

                            <div className="content-box">
                                <h3>Brand Recognition</h3>

                                <p>
                                    Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                                </p>
                            </div>
                        </div>

                        <div className="box box-3" style={{ marginTop: '4rem' }}>
                            <div className="img_box">
                                <img src="/images/icon-fully-customizable.svg" alt="brand" />
                            </div>

                            <div className="content-box">
                                <h3>Brand Recognition</h3>

                                <p>
                                    Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="boost">
                <h2>Boost your links today</h2>

                <button className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Get Started
                </button>
            </section>
        </main>
    )
}