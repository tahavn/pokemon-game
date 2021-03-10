import s from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg}) => {
    const bgStyle = {
        backgroundImage: urlBg && `url('${urlBg}')`,
        backgroundColor: colorBg && colorBg
    }
    return (
        <section style={bgStyle} className={s.root}>
            <div className={s.wrapper}>
                <article>
                    {title &&
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    }
                    {descr &&
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{descr}</p>
                    </div>
                    }
                </article>
            </div>
        </section>
    )
}

export default Layout;