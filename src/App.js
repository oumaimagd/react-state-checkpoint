import React, { Component } from "react";
import "./App.css";
import captureImage from "./images/Capture.PNG";

class App extends Component {
  state = {
    person: {
      fullName: "Guediri Oumaima",
      bio: "Ingénieure spécialisée en Administration des Systèmes, Sécurité et Cloud Computing, passionnée par l'innovation technologique. Dynamique, responsable et prête à contribuer à des projets innovants dans un environnement motivant.",
      imgSrc: captureImage,
      profession: "Ingénieure Réseau et Systèmes Informatiques",
    },
    show: true,
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClickShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { show, count } = this.state;

    return (
      <div className="App">
        <button onClick={this.handleClickShow}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show && (
          <div className="grid-container">
            <div className="partie1">
              <img
                src={this.state.person.imgSrc}
                alt="Capture"
                className="App-logo"
              />
              <h2>Contact</h2>
              <h5>E-mail: oumaimagdiri98@gmail.com</h5>
              <h5>Téléphone: 24662002</h5>
              <h5>Adresse: rue Mahdia, 3099 SFAX</h5>
              <h5>
                LinkedIn:
                <a href="https://www.linkedin.com/in/guediri-oumaima-27a404259/">
                  https://www.linkedin.com/in/guediri-oumaima-27a404259
                </a>
              </h5>
              <h5>
                GitHub:
                <a href="https://github.com/oumaimagd">
                  https://github.com/oumaimagd
                </a>
              </h5>
              <h2>Compétences Techniques</h2>
              <p>
                <h5>Systèmes d'exploitation:</h5> Linux, Windows, Windows server
                <h5>Réseau:</h5> Cisco sur GNS3,Packet Tracer, OSPF, EIGRP, STP,
                SNMP, VLANs, DHCP, DNS,NAT,IPsec
                <h5>Outils de sécurité et supervision :</h5> PRTG, SNMP,
                Proxmox, NAGIOS, Parrot,IDS/IPS
                <h5>Virtualisation :</h5> VMware ESXI, VirtualBox, FreeNas,
                VMware Workstation
                <h5>DeVops :</h5> Docker, Docker-compose, Git, Kubernets,
                Jenkins, Grafana,Prometheus
                <h5>Service d'annuaire :</h5> LDAP, Active Directory
                <h5>Autres:</h5>HTML, CSS, PYTHON, JAVA, C++, JAVASCRIPT, PHP,
                Oracle,Hadoop,
              </p>
              <h2>Formation</h2>
              <ul>
                Institut supérieur des études technologiques de Sfax 2021-2023
                <li>
                  Mastère professionnel en Administration des Systèmes Sécurité
                  et Cloud Computing
                </li>
                2017-2020
                <li>
                  Technicien Supérieur en réseaux et systèmes informatiques
                </li>
                Lycée Argoub (Mareth-Gabés) 2017
                <li>Baccalauréat en économie et gestion</li>
              </ul>
              <h2>Language</h2>
              <p>Arabe :courant Français : B2 Anglais : B2 </p>
            </div>
            <div className="partie2">
              <h1>{this.state.person.fullName}</h1>
              <h3>{this.state.person.profession}</h3>
              <p>{this.state.person.bio}</p>
              <h2>Expérience</h2>
              <article>
                <h6>février 2023-Juin 2023</h6>
                <h5>Stage dans une société POLY-TECH |Sfax </h5>
                <p>
                  <ul>
                    <li>
                      Conception et implémentation d'une infrastructure
                      hyperconvergente avec vSAN.
                    </li>
                    <li>
                      Responsable de la création, de la configuration et de la
                      gestion opérationnelle d'un cluster Kubernetes.
                    </li>
                    <li>
                      Mise en place d'une chaîne d'intégration et de déploiement
                      continu (CI/CD) avec utilisation de Grafana et Prometheus
                      pour la surveillance des performances et des métriques.
                    </li>
                    <li>
                      technologies et logiciels: vSAN, Kubernets, Jenkins,
                      Grafana et Prometheus,VM.
                    </li>
                  </ul>
                </p>
              </article>
              <article>
                <h6>septembre 2020-février 2021</h6>
                <h5>Stage dans une agence de voyage |Gabes mareth </h5>
                <p>
                  Suivi Administratif des Réservations :
                  <ul>
                    <li>
                      Gestion complète des réservations, y compris la
                      coordination des confirmations et la vérification des
                      disponibilités et des tarifs.
                    </li>
                    <li>Identification des Besoins des Clients :</li>
                    Offrir des Solutions Adaptées :
                    <li>
                      Proposition de solutions personnalisées en fonction des
                      préférences des clients, recommandant des destinations,
                      hébergements et activités appropriés.
                    </li>
                    <li>
                      es technologies utilisées :sont principalement des outils
                      de bureautique standard tels que Microsoft Office (Word,
                      Excel, Outlook) pour gérer les réservations et communiquer
                      avec les client
                    </li>
                  </ul>
                </p>
              </article>
              <article>
                <h6>Février 2020-Mai 2020 </h6>
                <h5>Stage de fin d'études| Hôpital Hedi Chaker </h5>
                <p>
                  <ul>
                    <li>
                      Etudier et réaliser un tableau de bord pour la supervision
                      système à l'aide d'un outil open source NAGIOS Développer
                      une application qui permet la supervision du réseau et des
                      équipements informatiques de l' hôpital
                    </li>

                    <li>les technologies utilisées:Nagios ,GNS3,SNMP</li>
                  </ul>
                </p>
              </article>
              <article>
                <h6>janvier2018-Février 2018 </h6>
                <h5>
                  Stage d'Initiation |Socété tunisienne de l'électricité et de
                  gaz de Gabes
                </h5>
                <p>
                  <ul>
                    <li>
                      Utilisation du logiciel AutoCAD pour divers projets de
                      conception et de dessin technique.
                    </li>
                    <li>
                      Participation active aux sorties sur le terrain avec
                      l'équipe
                    </li>
                    <li>es technologies utilisée:AutoCAD </li>
                  </ul>
                </p>
              </article>
              <article>
                <h6>février 2023-Juin 2023</h6>
                <h5>Stage dans une société POLY-TECH |Sfax </h5>
                <p>
                  <ul>
                    <li>
                      Conception et implémentation d'une infrastructure
                      hyperconvergente avec vSAN.
                    </li>
                    <li>
                      Responsable de la création, de la configuration et de la
                      gestion opérationnelle d'un cluster Kubernetes.
                    </li>
                    <li>
                      Mise en place d'une chaîne d'intégration et de déploiement
                      continu (CI/CD) avec utilisation de Grafana et Prometheus
                      pour la surveillance des performances et des métriques.
                    </li>
                    <li>
                      technologies et logiciels: vSAN, Kubernets, Jenkins,
                      Grafana et Prometheus,VM.
                    </li>
                  </ul>
                </p>
              </article>
              <h2>CERTIFICATION</h2>
              <ul>
                <li>CCNA R&S: Routing and Switching Essentials </li>
                <li>Certificat de PowerPoint et Word</li>
                <li>Cloud Security Alliance CCSK v4.1 Foundation Training </li>
                <li>Azure Fundamentals certification </li>
                <li>INTRODUCTION TO WEB DEVELOPMENT </li>
              </ul>
              <h2>Intervalle de temps :</h2>
              <p>{count} secondes</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
