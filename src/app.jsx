function App() {
    return (
        <div >
            <MainHeader />
            <Header />
            <Body />
        </div>
    )
}

function MainHeader() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState(false);

    const changeIcon = () => {
        if (window.scrollY >= 80) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    window.addEventListener("scroll", changeIcon);

    if (isOpen === false) {
        return (
            <div className="headerC  headerSticky">
                <div >
                    <h1 style={{ textAlign: "center", padding: "5px" }} >PÁVA PAPÍR</h1>
                    <img src="borito.jpg" alt="" style={{ width: "80px", height: "120px" }} className="center" />
                </div>
                <nav className={scroll ? "notHiddenNav miniNav" : "hiddenNav miniNav"}>
                    <button className="logo" onClick={() => {
                        setIsOpen(!isOpen);
                    }}><i className="bi bi-justify"></i>
                    </button>
                </nav>
            </div>

        )
    }
    else {
        return (
            <div className="headerC headerSticky">
                <div>
                    <h1 style={{ textAlign: "center", padding: "5px" }} >PÁVA PAPÍR</h1>
                    <img src="borito.jpg" alt="" style={{ width: "80px", height: "120px" }} className="center" />
                </div>
                <nav className={scroll ? "notHiddenNav miniNav" : "hiddenNav miniNav"}>
                    <button className="logo" onClick={() => {
                        setIsOpen(!isOpen);
                    }}><i className="bi bi-arrow-left"></i>
                    </button>
                    <div className=" miniNav2 list-group">
                        <a href="#" className="myNav2"> <i className="bi bi-calculator-fill"></i> Iskolaszerek</a>
                        <a href="#" className="myNav2"> <i className="bi bi-pen"></i>Irodaszerek</a>
                        <a href="#" className="myNav2"> <i className="bi bi-wallet2"></i>Táskák/Pénztárcák</a>
                        <a href="#" className="myNav2"> <i className="bi bi-usb-drive"></i> Egyéb</a>
                        <a href="#" className="myNav2"> <i className="bi bi-person"></i>Kapcsolatok</a>
                    </div>
                </nav>

            </div>
        )
    }
}

function Header() {
    const [scroll, setScroll] = React.useState(false);

    const changeScroll = () => {
        if (window.scrollY >= 1) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.addEventListener("scroll", changeScroll);

    return (
        <div className="headerC ">
            <nav style={{ width: "965px", margin: "auto", padding: "0px" }} className="navbar">
                <a className={scroll ? "hiddenNav myNav" : "notHiddenNav myNav"} href="#"> <i className="bi bi-calculator-fill"></i> Iskolaszerek</a>
                <a className={scroll ? "hiddenNav myNav" : "notHiddenNav myNav"} href="#"> <i className="bi bi-pen"></i>Irodaszerek</a>
                <a className={scroll ? "hiddenNav myNav" : "notHiddenNav myNav"} href="#"> <i className="bi bi-wallet2"></i>Táskák/Pénztárcák</a>
                <a className={scroll ? "hiddenNav myNav" : "notHiddenNav myNav"} href="#"> <i className="bi bi-usb-drive"></i>Egyéb</a>
                <a className={scroll ? "hiddenNav myNav" : "notHiddenNav myNav"} href="#"> <i className="bi bi-person"></i>Kapcsolatok</a>
            </nav>
        </div>
    )
}

function Body() {
    const [szoveg, setSzoveg] = React.useState("XXXX-ben nyitott meg a bolt, helyileg Püspökladányban található a xxxxx szám alatt.")

    let counter = 1;
    setInterval(() => {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if(counter > 3) {
            counter = 1;
        }
    },10000);

    return (
        <div style={{ borderLeft: "#1C641F ridge 2px", borderRight: "#7BC830 ridge 5px", padding: "10px" }} className="shadow-lg rounded-bottom ">
            <div style={{ padding: "15px" }}>
                <select name="select" id="select" onChange={() => {
                    setSzoveg(elozo => elozo + 'szó')
                }}>
                    <option value="">Üzletünkről:</option>
                    <option value="">Információ</option>
                </select>
                <p>{szoveg}</p>

                <div className="slidebody">
                    <div className="slider">
                        <div className="slides">

                            <input type="radio" name="radio-btn" id="radio1" />
                            <input type="radio" name="radio-btn" id="radio2" />
                            <input type="radio" name="radio-btn" id="radio3" />


                            <div className="slide first">
                                <img src="borito.jpg"  alt="" />
                            </div>

                            <div className="slide">
                                <img src="pava.jpg"  alt="" />
                            </div>

                            <div className="slide">
                                <img src="teszt.png"  alt="" />
                            </div>

                        </div>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere repudiandae id debitis iusto officiis praesentium, quisquam eveniet veniam ea incidunt commodi ipsa et consectetur sunt nisi alias ducimus pariatur ipsum ratione beatae labore! Optio fugiat molestiae nulla commodi in voluptatem odio possimus numquam perspiciatis quibusdam reprehenderit sit exercitationem recusandae, autem illum provident mollitia totam nisi enim est. Quisquam recusandae est ab, maxime rerum blanditiis facilis dolorum repellat sapiente magnam error enim numquam modi architecto labore. Minus rerum alias praesentium nesciunt eius id, laboriosam perferendis enim vero magnam expedita aspernatur rem fugit obcaecati, consequatur temporibus quas error et dicta ut, reiciendis optio nobis! Deleniti amet libero blanditiis cumque consectetur qui quasi incidunt autem quibusdam repellendus ipsam dolorum est, quae consequatur temporibus! Blanditiis ut dolore neque expedita velit, ipsum odio tempora voluptates sapiente impedit perferendis numquam? Cupiditate, quos voluptatibus ea temporibus quidem sapiente veritatis debitis alias nesciunt excepturi dolores non laboriosam repudiandae nostrum culpa quae nobis porro. Nostrum placeat cupiditate minus excepturi consequuntur facilis laboriosam doloribus natus optio nisi exercitationem ullam tempora voluptas quidem minima expedita fugiat non, eaque, rem sunt quo odio architecto suscipit tenetur? Cum necessitatibus inventore quibusdam vel animi laborum minus maiores ipsum ratione blanditiis porro ipsa enim, assumenda placeat nam magnam est officia. Rem nihil, hic aut, facere, provident necessitatibus laudantium omnis illum nemo eaque delectus atque asperiores odit qui sit quisquam quibusdam. Perspiciatis facilis atque, quaerat libero blanditiis distinctio cumque? Quam ullam exercitationem nostrum consequatur saepe accusamus doloremque laborum tempore ut voluptatem? Ducimus unde esse ipsam mollitia ullam non, repudiandae voluptatum voluptates fugit iste consectetur sit voluptatibus alias ut a consequatur quaerat nobis autem aperiam. Illum voluptatibus ipsa repellendus tempora mollitia excepturi beatae eius, vero doloremque suscipit dolores quasi reprehenderit necessitatibus impedit! Sit, earum. Fugiat nihil dicta architecto minima, id delectus deleniti! Eius, repudiandae modi iusto sint, officiis aperiam dolore consequatur odit reiciendis unde iure voluptatibus id? Soluta labore id sed aut cumque. Nemo aliquid saepe explicabo debitis a mollitia atque odit ratione doloribus eveniet quia nesciunt doloremque corporis harum enim eum sapiente unde expedita ducimus quibusdam reiciendis, labore accusamus sed? Debitis dolor ut laboriosam doloremque delectus laudantium accusantium? Aliquid voluptatem enim deleniti quod, officia maxime, nam molestiae aut, minus id et. Aliquam quasi et laboriosam enim inventore porro illo non. Deserunt in numquam asperiores repudiandae. Quidem, minima ipsa? Veniam sed perspiciatis, maiores ab error quis odit reprehenderit, similique dignissimos reiciendis voluptas voluptatem? Vel delectus obcaecati unde consequatur veritatis. A sequi illum dolores nam culpa ea, voluptatum perferendis dolor sapiente, expedita eos quas voluptates id aliquid molestiae corrupti magnam ipsum? Illum exercitationem fugiat inventore natus temporibus animi dignissimos vel explicabo, voluptates error ut quidem veritatis labore, libero adipisci perspiciatis nesciunt magni accusantium ex quis amet? Ipsam eius commodi dolor nostrum labore enim provident laudantium ipsa dignissimos ad consequuntur at dicta sed, praesentium quo eos optio! Officia pariatur quis ipsam quam eos, ex laborum cum vel nesciunt quod ipsa nam? Hic enim voluptatibus adipisci delectus sit earum sed! Incidunt assumenda, amet ullam pariatur debitis repellendus rem quasi. Ducimus nulla provident dolor iure impedit voluptas architecto vitae facere, dolorum optio repellat itaque ad? Omnis placeat, quod quisquam, necessitatibus sed dolores quia ea quasi voluptatum nisi error, in ducimus velit dignissimos nihil doloremque inventore accusamus consequatur officiis perferendis quam nemo. Dolor magnam reiciendis eum quas neque, illum ipsum non voluptatem hic delectus quae soluta alias illo numquam odit necessitatibus reprehenderit qui doloremque quo architecto distinctio fugiat? Deserunt quo eligendi voluptas exercitationem, dolor ad? Porro iusto corrupti culpa aut, possimus, ullam exercitationem omnis temporibus laudantium aperiam accusamus odio, cum illum minima repudiandae commodi? Quod, aut odit perspiciatis praesentium delectus eius voluptatem eum ipsam! Consequatur molestiae recusandae magni, quo mollitia aliquid asperiores eaque repellat praesentium assumenda, excepturi, totam sapiente in blanditiis ad at quasi impedit suscipit incidunt earum dolor est dolorem hic. Libero, ipsa veritatis repudiandae voluptatibus possimus at quis voluptates dignissimos provident nulla eum maiores fuga mollitia quo consequatur maxime quibusdam! Impedit tenetur aliquid unde ducimus fugiat quis qui adipisci optio quaerat? Ut alias aspernatur eos laudantium molestias voluptatibus culpa est unde veniam voluptas debitis nulla ducimus cum molestiae totam odit vel, rem accusantium facilis porro quam modi fugiat! Qui animi quod reprehenderit unde nostrum quae quis nulla eos! Ratione cum porro animi alias pariatur doloribus vero perspiciatis, odit vel maiores sapiente tempore, blanditiis repellendus sequi rem quis sunt! Architecto assumenda delectus laboriosam repudiandae repellat sint ex excepturi voluptas debitis iusto molestias ratione quidem exercitationem eaque nobis sit, aliquid eligendi est quo! Voluptatem numquam, voluptatibus dolor voluptatum harum molestias minima maxime a fugit saepe architecto ratione dolore, tempora iusto iure, soluta labore ab ipsam accusamus at deserunt illo sunt reprehenderit quia! Incidunt vitae suscipit veritatis qui. Nisi vero labore suscipit magni sunt ducimus laborum quam voluptas sapiente, vitae pariatur mollitia quos ea consequatur unde quo omnis nemo culpa, consequuntur dolor eum! Ad fugit consectetur necessitatibus natus hic. Eius ipsa dolores numquam, eum itaque quas eos est sed ullam sunt officia fuga nesciunt velit ab deleniti impedit distinctio molestiae cum illum suscipit aut? Architecto recusandae voluptatibus quisquam harum beatae temporibus enim reprehenderit deleniti neque, sapiente ut laboriosam sequi modi perspiciatis rem quasi. Quae porro corporis, tenetur tempore voluptas suscipit omnis totam distinctio aperiam, libero amet sit mollitia ipsum non. Dolorum tempora qui at quis aspernatur, quo veniam consectetur magnam molestias ex similique nulla facilis reprehenderit aperiam necessitatibus ad, beatae laboriosam molestiae, cupiditate obcaecati sunt fuga mollitia. In iure assumenda voluptates quas quo eligendi, accusantium illum sed, saepe eaque blanditiis autem! Recusandae nihil at temporibus iste illum eveniet est eaque non suscipit ab corrupti illo, consequatur maiores. Perferendis pariatur dicta porro non earum cum nulla maiores facilis sed ad aut corrupti, tenetur numquam similique. Aliquid laboriosam officiis aut harum dolor doloremque illo porro eum velit, excepturi animi facilis mollitia officia cumque delectus cupiditate qui necessitatibus provident reiciendis eius asperiores, reprehenderit ipsa tenetur culpa. Dolorem earum neque ullam eius expedita facilis esse molestias corrupti porro quam. Ab vero laborum fugit officiis molestias harum fuga nam deleniti culpa aliquam! Repudiandae voluptatem sequi ex eligendi cum repellat ea provident, voluptatum voluptatibus est assumenda recusandae id corrupti tenetur nostrum vel nihil quasi sint inventore temporibus expedita mollitia aliquid minima. Vel, ullam! Eum, sint temporibus voluptates at eius totam laborum fugiat, animi consequuntur mollitia laboriosam adipisci sapiente enim nostrum expedita officiis corrupti architecto id esse fugit. Culpa fuga aliquid, eos quo ex vitae quisquam. Unde excepturi sunt quas ipsum, recusandae libero obcaecati laboriosam minus accusamus beatae maxime fugit hic vel, eaque omnis fugiat incidunt neque nostrum cumque quaerat. Quae magnam eveniet porro aspernatur consequatur similique, totam assumenda nam ipsum qui vero, quaerat, in esse. Est ipsa magni fugiat laborum repellendus! Nesciunt cumque neque quo veritatis quisquam et consequatur laudantium nihil nulla modi facilis iusto eos, vero ratione quod? Laboriosam fugiat voluptatibus in, minima nemo obcaecati labore dolore autem dicta perferendis hic accusantium corporis asperiores, officiis iusto? Ea aliquam voluptatibus necessitatibus sed aspernatur quas odio iusto libero maiores doloremque saepe at esse, ducimus modi dolores molestiae explicabo ab minima voluptatem, atque illum nostrum rem? Illo, repellat ipsa odit ea, libero ipsum rem incidunt distinctio iste minus perspiciatis reiciendis itaque corporis harum iure sunt possimus aspernatur nesciunt dolore est recusandae beatae sequi perferendis consectetur! Molestias dolores ratione assumenda natus? Vitae id tempora perspiciatis accusantium a maiores tenetur, explicabo blanditiis natus nesciunt sequi odio nobis omnis velit vero. Voluptates, quibusdam officia doloremque repellat recusandae consequatur eum quaerat sed tempora est at pariatur fugiat autem beatae voluptatem deleniti ipsum sequi facilis corrupti ut voluptatum doloribus! Vitae ea perspiciatis earum doloribus distinctio dolores recusandae beatae, nihil dolorum eligendi eveniet libero? Eligendi repellendus maiores, eaque cum unde itaque similique dolore neque molestiae quasi, soluta magni non. Nemo quisquam eaque quibusdam ullam impedit eius pariatur consequatur provident itaque optio. Repellendus assumenda architecto amet illo reiciendis aut non nemo facere? Pariatur delectus maxime magnam eos est veniam voluptas suscipit tempora, cupiditate deleniti? Placeat, eligendi, quae soluta tenetur at quas inventore, aut odit omnis quibusdam sint enim! Voluptatum quam nihil quis quasi pariatur, alias ipsum, repellendus ratione quaerat facere architecto velit corrupti, consequuntur rem dignissimos id reiciendis commodi voluptatem. Animi dolores earum neque nostrum voluptatem nemo quam aliquid quaerat repellendus, debitis voluptatum, quos sit? Eveniet odio ducimus excepturi aliquam ullam debitis suscipit, voluptatem dolorum consectetur vel optio accusamus exercitationem beatae unde. Eius quis nisi, dicta dolorum minima minus repellat eaque maxime magni perspiciatis esse deserunt vero? Doloremque vel similique vero non reiciendis ut natus incidunt delectus totam, repellat ea nulla assumenda eaque laborum earum quae quas? Consequuntur dolore laborum soluta sequi consequatur tempore a. Culpa corrupti, fugit totam sequi libero iusto quia laboriosam, veritatis, nulla vitae assumenda delectus incidunt sint ratione similique dolorum voluptas expedita architecto in commodi numquam. Voluptatum harum sunt aspernatur corrupti suscipit enim, illo dignissimos tempora modi ipsum, atque temporibus possimus vel quos laboriosam. Autem saepe voluptatibus laboriosam nam, numquam qui excepturi accusantium! Aliquam vel voluptatem illum labore animi veritatis delectus. Consectetur nostrum quos pariatur! Perspiciatis, nostrum quidem sint, ipsa, officia excepturi vero voluptatibus omnis odio numquam aliquid reiciendis dolor. Facere, esse. Quia, magnam vel placeat facilis similique dolore illum cum repellendus eaque voluptas repudiandae. Unde vel quia deserunt earum perferendis voluptatibus asperiores adipisci beatae, eveniet debitis. Voluptatum natus quisquam laborum temporibus quis labore quia accusamus consequatur? Iure magnam hic illo sunt, ipsum quas! Id necessitatibus praesentium explicabo aliquid, expedita excepturi enim nulla et nobis consectetur repellat mollitia sed voluptate nam distinctio laudantium perferendis temporibus ipsum quae quod recusandae vitae tempore voluptas? Iusto accusantium, itaque non perspiciatis nihil sit eius fugit nemo nostrum totam ipsam libero, ad voluptates dolores! Necessitatibus nesciunt quibusdam facere esse, suscipit itaque maxime consequatur magnam excepturi quae alias ratione? Minima eveniet nesciunt iste aut recusandae esse ipsam autem itaque laborum totam, amet reiciendis dolores ipsa quidem quae quam harum corrupti voluptatem possimus placeat explicabo. Facilis consectetur aliquam ratione corrupti atque recusandae saepe iusto sed nostrum expedita quidem eaque, dolores totam? Neque dolorum, nulla veniam illum architecto aperiam ipsam quisquam vitae magni voluptas eaque ipsum quidem nam repudiandae sit distinctio optio saepe hic! Similique, pariatur dicta? Soluta corrupti, eum vero consequuntur debitis molestias, quasi, fugit quibusdam architecto animi laudantium magni non reiciendis quos praesentium quisquam quod nobis accusamus fuga tenetur odio repudiandae exercitationem dicta illum. Assumenda dolores dolorem temporibus consequuntur itaque iure rem vero tempora maxime animi nobis sunt perspiciatis qui ipsam at nulla corrupti dolore accusamus magni repudiandae sequi, ut neque autem. Eius, ex debitis veniam itaque inventore amet tempora dolores reiciendis voluptate autem consectetur earum tenetur vel aspernatur consequatur. Nemo tempore quos esse eum saepe. Veniam accusantium itaque culpa alias quos deleniti doloremque dignissimos, quae, dolor pariatur cumque facere voluptas. Sunt enim, labore, similique ratione eum incidunt ut impedit maxime, magni cupiditate reiciendis. Nihil nesciunt doloremque itaque nemo consequuntur veritatis assumenda officia voluptas, fugiat quae earum quis doloribus dolorem ratione adipisci porro quisquam tenetur nostrum ipsa esse nisi excepturi rem minima. At in blanditiis voluptas fugit, corrupti eligendi molestias cumque totam error odio consequuntur laborum reprehenderit quisquam, ratione voluptate perspiciatis repellat quo tenetur illum mollitia! Ab eum dicta quisquam itaque accusamus laudantium velit quibusdam, minima recusandae reprehenderit animi ipsam excepturi praesentium tempora error culpa rem. Tempora animi blanditiis beatae nemo repudiandae dignissimos veniam molestias officiis deserunt? Amet eligendi sunt corrupti, autem ea praesentium obcaecati id suscipit nihil quidem incidunt, laboriosam distinctio. Molestiae omnis distinctio vitae fuga corrupti at cupiditate inventore et sit dolores corporis consequuntur eos incidunt, ipsam, ducimus doloribus cumque excepturi iste ipsa cum a? Animi, ad veniam distinctio praesentium saepe nihil doloremque omnis eos dolorem, sapiente tempore! Similique nihil quo quis earum soluta dolor velit ullam maxime eos nam dolores quas fugit, perspiciatis ipsa accusantium voluptates tempore odio id quam modi! Voluptatum, quia nostrum officia blanditiis sed libero itaque recusandae eveniet modi quaerat nobis unde fugiat perferendis harum eum soluta maiores, placeat eos! Accusamus quibusdam neque fuga temporibus. Animi officiis vel recusandae quasi laborum doloremque, porro repellat perferendis quos, iusto, alias minima quam dolores modi sunt nemo corporis ipsum cum officia. Eligendi cum quia repellendus, officiis tenetur mollitia voluptatibus veritatis odit quibusdam ex impedit doloremque ea!</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("container"));