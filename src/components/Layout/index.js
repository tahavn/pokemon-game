import s from './style.module.css';

const Layout = ({title, urlBg, colorBg, children}) => {
    const bgStyle = {
        backgroundImage: urlBg ? `url('${urlBg}')` : '',
        backgroundColor: colorBg || ''
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
                    {children &&
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                    }
                </article>
            </div>
        </section>
    )
}

export default Layout;