import React, { Component } from 'react';
import Data from '../data/data.json';
// import WalkingImage from '../images/wedding.jpg';

class Details extends Component {
  render () {
    return (
      <div className='details'>
        <div className='details-section'>
          <section className='details-ceremony'>
            <div className='details-svg' >
              <svg width='50px' height='50px' viewBox='0 0 50 50' version='1.1'>
                <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g id='if_valenticons-07_430727' fill='#FFFFFF' fillRule='nonzero'>
                    <path d='M46.0003896,8.10725552 C41.6200784,2.87066246 33.9545337,0.994867932 27.1494073,3.4177692 L26.836528,2.47987193 C26.5236486,1.69829088 26.0543295,1.15118414 25.5067906,0.994867932 C25.2721311,0.916709826 24.7245922,0.916709826 24.2552731,1.30750035 L24.0206136,1.54197467 C24.0206136,1.54197467 24.0206136,1.62013277 23.9423937,1.62013277 L24.0988334,0.916709826 C24.0988334,0.916709826 24.0988334,0.916709826 24.0988334,0.916709826 C24.0988334,0.916709826 24.0988334,0.838551721 24.0988334,0.838551721 C24.0988334,0.838551721 24.0988334,0.838551721 24.0988334,0.760393616 C24.0988334,0.68223551 24.0988334,0.68223551 24.0206136,0.604077405 C24.0206136,0.604077405 24.0206136,0.604077405 24.0206136,0.604077405 C24.0206136,0.604077405 24.0206136,0.604077405 24.0206136,0.604077405 C24.0206136,0.525919299 23.9423937,0.525919299 23.8641739,0.525919299 C23.8641739,0.525919299 23.8641739,0.525919299 23.7859541,0.525919299 C23.7859541,0.525919299 23.7077342,0.525919299 23.7077342,0.525919299 C23.7077342,0.525919299 23.7077342,0.525919299 23.7077342,0.525919299 L20.8918198,0.447761194 C20.8136,0.447761194 20.7353802,0.447761194 20.6571603,0.525919299 L17.2154872,3.33961109 C17.1372673,3.4177692 17.1372673,3.4959273 17.0590475,3.57408541 L16.5115086,6.3877772 C16.5115086,6.46593531 16.5115086,6.62225152 16.5897284,6.70040962 C16.6679483,6.77856773 16.7461681,6.77856773 16.9026078,6.77856773 C16.9026078,6.77856773 16.9026078,6.77856773 16.9026078,6.77856773 L17.8412459,6.77856773 C17.7630261,6.85672583 17.6848063,6.85672583 17.6065864,6.93488394 L17.3719269,7.16935826 C16.824388,7.63830689 16.824388,8.10725552 16.824388,8.34172984 C16.9026078,8.88883657 17.293707,9.43594331 18.0759055,9.90489194 L18.9363237,10.3738406 C17.8412459,12.2496351 17.1372673,14.4380621 16.824388,16.626489 C16.824388,16.626489 16.824388,16.7046471 16.824388,16.7046471 C12.9133958,16.7046471 9.15884329,18.0333349 6.18648924,20.6125524 C-0.853296692,26.5525684 -1.79193482,37.0257545 4.1527733,44.059984 C7.43800673,47.9678893 12.2094172,50 16.9026078,50 C20.6571603,50 24.4899326,48.7494703 27.6187264,46.0920947 C30.7475201,43.4347191 32.7812361,39.7612882 33.4069948,35.7752248 C33.4069948,35.7752248 33.4069948,35.6970667 33.4069948,35.6970667 C36.8486679,35.6970667 40.2121212,34.6028532 43.1062554,32.4925844 C46.9390278,29.6788926 49.2856231,25.6146711 49.9113818,20.9251848 C50.3807009,16.3138566 48.9727437,11.6243703 46.0003896,8.10725552 Z M23.6295144,5.21540562 L23.1601953,5.60619615 L23.4730747,4.04303404 L23.6295144,5.21540562 Z M21.830458,2.87066246 L23.1601953,1.85460709 L22.5344366,4.98093131 L21.830458,2.87066246 Z M21.9086778,5.44987994 L19.9531817,4.35566646 L21.2046992,3.33961109 L21.9086778,5.44987994 Z M19.4838627,3.73040162 L19.5620825,2.71434625 L20.6571603,2.87066246 L19.4838627,3.73040162 Z M19.2492031,4.98093131 L21.2046992,6.07514478 L17.9194658,6.07514478 L19.2492031,4.98093131 Z M21.0482595,1.15118414 L22.6908762,1.15118414 L21.5175786,2.08908141 C21.5175786,2.08908141 21.4393587,2.08908141 21.4393587,2.08908141 L20.1096214,1.9327652 L21.0482595,1.15118414 Z M18.7016642,3.10513678 L18.6234444,4.43382457 C18.6234444,4.43382457 18.6234444,4.43382457 18.6234444,4.43382457 L17.4501467,5.37172183 L17.8412459,3.88671783 L18.7016642,3.10513678 Z M21.7522381,6.77856773 L21.2829191,7.16935826 L19.9531817,6.77856773 L21.7522381,6.77856773 Z M26.5236486,44.9197232 C20.1096214,50.2344743 10.5668005,49.4528933 5.24785111,43.0439286 C2.66659627,39.9176044 1.41507877,36.0096991 1.80617799,32.0236358 C2.11905737,28.0375724 4.07455346,24.3641414 7.12512736,21.784924 C10.0192616,19.3620227 13.7738141,18.111493 17.5283666,18.2678092 C21.7522381,18.4241254 25.7414501,20.4562362 28.4009248,23.6607185 C30.1217614,25.6928292 31.2168392,28.1157305 31.6861583,30.694948 C31.0603995,30.6167899 30.5128606,30.5386318 29.8871019,30.3823156 C29.4177828,28.3502048 28.4791447,26.3962522 27.0711875,24.8330901 C25.4285708,22.8791374 23.2384151,21.4722915 20.8136,20.6907105 C19.7185222,20.3780781 18.5452245,20.1436037 17.4501467,20.1436037 C17.4501467,20.1436037 17.4501467,20.1436037 17.4501467,20.1436037 C17.4501467,20.1436037 17.4501467,20.0654456 17.4501467,20.0654456 C17.4501467,20.0654456 17.4501467,20.0654456 17.4501467,20.0654456 C14.0866934,19.9091294 10.8796799,21.0033429 8.29842501,23.1917699 C2.58837643,27.9594143 1.88439784,36.4004897 6.6558083,42.1060314 C9.31528298,45.2323556 13.1480553,46.8736758 16.9808277,46.8736758 C20.0314016,46.8736758 23.0819755,45.8576204 25.5850105,43.7473516 C28.0880455,41.6370827 29.7306622,38.7452328 30.1999812,35.5407505 C30.7475201,35.6189086 31.295059,35.6970667 31.8425979,35.7752248 C31.2168392,39.2141815 29.339563,42.57498 26.5236486,44.9197232 Z M33.2505551,30.7731061 C32.7812361,27.8030981 31.5297186,24.9894063 29.5742225,22.6446631 C27.3840669,20.0654456 24.4899326,18.2678092 21.3611389,17.329912 C21.3611389,17.329912 21.3611389,17.2517538 21.3611389,17.2517538 C21.7522381,14.359904 23.2384151,11.7025284 25.5067906,9.82673384 C27.9316058,7.7946231 30.9821797,6.85672583 34.1891933,7.09120015 C37.317987,7.40383257 40.2121212,8.88883657 42.2458372,11.3117378 C44.2795531,13.7346391 45.2181912,16.7828052 44.9835317,19.9872875 C44.6706523,23.1136118 43.1844753,26.0054617 40.7596601,28.0375724 C38.6477243,29.7570507 35.9882497,30.694948 33.2505551,30.7731061 Z M28.0880455,29.6007345 C26.5236486,28.8973115 25.1939112,27.8030981 24.0206136,26.4744103 C23.0819755,25.3020387 22.299777,23.9733509 21.830458,22.566505 C23.3948548,23.269928 24.802812,24.3641414 25.8978898,25.6928292 C26.9147478,26.8652008 27.6187264,28.1938886 28.0880455,29.6007345 Z M16.7461681,21.4722915 C17.2154872,24.9112482 18.6234444,28.0375724 20.9700397,30.4604737 C23.0819755,32.7270587 25.7414501,34.2120627 28.5573645,34.9936438 C28.5573645,34.9936438 28.5573645,34.9936438 28.5573645,35.0718019 C28.1662653,37.9636518 26.6800883,40.5428692 24.4117128,42.4186638 C19.4056428,46.6392015 11.8965378,45.9357785 7.67266626,40.9336598 C3.44879471,35.931541 4.1527733,28.4283629 9.15884329,24.2078252 C11.3489989,22.4883469 13.9302538,21.5504496 16.7461681,21.4722915 Z M48.2687651,20.6907105 C47.7212262,24.9112482 45.6092904,28.6628372 42.0893975,31.1638966 C35.9882497,35.6970667 27.3840669,34.9154857 22.1433373,29.4444183 C20.1096214,27.3341494 18.7798841,24.5986158 18.310565,21.6286077 C18.8581039,21.7067659 19.4838627,21.784924 20.0314016,22.0193983 C20.5007206,24.051509 21.4393587,26.0054617 22.8473159,27.5686238 C24.4899326,29.5225764 26.6018684,30.9294223 29.0266836,31.7110033 C29.0266836,31.7110033 29.1049034,31.7110033 29.1049034,31.7110033 C30.0435415,32.0236358 30.9821797,32.179952 31.9990376,32.2581101 C32.2336972,32.2581101 32.4683567,32.2581101 32.7030162,32.2581101 C32.7030162,32.2581101 32.7030162,32.2581101 32.7812361,32.2581101 C32.7812361,32.2581101 32.7812361,32.2581101 32.7812361,32.2581101 C32.9376758,32.2581101 33.0941154,32.2581101 33.2505551,32.2581101 C36.3793489,32.2581101 39.4299228,31.1638966 41.8547379,29.1317859 C44.5924325,26.8652008 46.313269,23.5825604 46.6261484,19.9872875 C46.9390278,16.3920147 45.84395,12.9530581 43.4973547,10.2175244 C41.2289792,7.48199068 37.9437458,5.76251236 34.3456329,5.44987994 C30.7475201,5.13724752 27.305847,6.23146099 24.5681525,8.57620415 C22.0651175,10.686473 20.4225008,13.656481 19.8749619,16.9391214 C19.4056428,16.8609633 18.8581039,16.7828052 18.3887848,16.7046471 C18.7016642,14.4380621 19.4838627,12.3277932 20.7353802,10.3738406 C20.8136,10.2175244 20.8918198,9.98305005 20.8136,9.74857573 C20.7353802,9.51410142 20.5789405,9.43594331 20.3442809,9.35778521 L18.8581039,8.49804605 C18.7016642,8.41988794 18.5452245,8.34172984 18.4670047,8.26357173 L18.6234444,8.18541363 C18.7016642,8.10725552 18.8581039,8.10725552 19.0145436,8.18541363 C19.0927634,8.18541363 19.0927634,8.26357173 19.1709833,8.26357173 L21.2046992,8.88883657 C21.4393587,8.96699468 21.7522381,8.88883657 21.9086778,8.73252036 L24.9592517,6.15330289 C25.1939112,5.99698668 25.2721311,5.68435425 25.1939112,5.44987994 L24.9592517,3.33961109 C24.9592517,3.26145299 24.9592517,3.18329488 24.8810319,3.18329488 C24.802812,3.02697867 24.8810319,2.87066246 24.9592517,2.79250436 L25.1156914,2.71434625 C25.1939112,2.79250436 25.2721311,2.94882057 25.2721311,3.10513678 L25.9761097,4.66829888 C26.0543295,4.9027732 26.2107692,5.05908941 26.3672089,5.13724752 C26.5236486,5.21540562 26.7583081,5.21540562 26.9929676,5.13724752 C33.328775,2.55803004 40.6814403,4.19935025 44.827092,9.12331089 C47.5647865,12.3277932 48.7380842,16.4701728 48.2687651,20.6907105 Z' id='Shape' />
                  </g>
                </g>
              </svg>
            </div>
            <h3>{Data.ceremony}</h3>
            <h4>{Data.location}</h4>
            <p>{Data.date}</p> <br />
            <p>{Data.address}</p>
          </section>
          <img alt='Details image' src={'https://lh3.googleusercontent.com/bhiawYatkFOt6UOkI4adUVlpueJ-rwS2Oerz0byi2POZBc_1olJ9SPQd4AxsgtSx8ocjBXIIoeaeNILG5hld4YPrWdv8OhG-vd4B6g9-sUcm_GH9l7w-DvFOsTuZ3ynB3np5SNrx7RUWKfCRtzQNXop1Nft5Lju3WKI0jPsj21d1gtbL_4H2g4eDXplBln6fMUdtLkQ3h3eKe5Ow1GRjriyKxHpbuslBbPi7dwOGLTgTOdJKbE2HoGQ_2MY2P3AIBU-iTifOPHEWbebBFJSx5OPFR9wqpA0aSaJaTyFdfvdGVXGwIXuW5vBMbxrYi4NESg1YDraM2D7l1ZIzflG1PkI61hpxCEZuLtorSTnTjhCPSzCN1YVAHMIvuqbq7NiUneSX7cbyHwfAHlpvIn5vN9bv6Rtt1wj8rmBc0rRkChY-1QIQ-1ljOrJsilfaAJMFS7DWtJ7DniDHj1ERK_SNeeswobSHMvtW61dSBa25lHgxp1beFuF5U998PzDwfhyzwnnHEf4qek-sF5F7PmThOxhgxjL4vVWPr7_tUmbmvtKYXUEMybG4K2TlhYHIFlL2Hli_FvOVDD7eSXkciBH6SWdJAjx2aJIYfWnt1zo=w802-h328-no'} />
          <section className='details-reception'>
            <div className='details-svg'>
              <svg width='50px' height='50px' viewBox='0 0 50 50' version='1.1'>
                <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g id='if_cake_1904649' fill='#FFFFFF' fillRule='nonzero'>
                    <path d='M48.9090845,30.0340199 L43.3373944,30.0340199 L43.3373944,13.3085227 C43.3373944,12.7201705 42.8643662,12.2431818 42.2809859,12.2431818 L27.8043662,12.2431818 L31.480493,8.53465909 C32.4130986,7.59517045 32.926338,6.34666193 32.926338,5.01754261 C32.926338,3.68892045 32.4130986,2.4399858 31.4810563,1.50099432 C30.55,0.561505682 29.3111268,0.0444602273 27.9942254,0.0444602273 C27.0043662,0.0444602273 26.0583803,0.336292614 25.2542958,0.880965909 C24.4495775,0.336363636 23.5041549,0.0444602273 22.5138028,0.0444602273 C21.1964085,0.0444602273 19.9580282,0.561576705 19.0264085,1.50099432 C18.0948592,2.44048295 17.5821831,3.68948864 17.5821831,5.01754261 C17.5821831,6.34616477 18.0949296,7.59509943 19.0264085,8.53409091 L22.7040845,12.2431108 L7.71901408,12.2431108 C7.1356338,12.2431108 6.66267606,12.7200994 6.66267606,13.3084517 L6.66267606,30.0339489 L1.09098592,30.0339489 C0.507605634,30.0339489 0.0346478873,30.5109375 0.0346478873,31.0992898 L0.0346478873,48.8901278 C0.0346478873,49.4784091 0.507605634,49.9554687 1.09098592,49.9554687 L48.9090845,49.9554687 C49.4923944,49.9554687 49.9654225,49.4784091 49.9654225,48.8901278 L49.9654225,31.0993608 C49.9654225,30.5110085 49.4923944,30.0340199 48.9090845,30.0340199 Z M19.6949296,5.01754261 C19.6949296,4.25852273 19.9878873,3.54431818 20.5202113,3.00745739 C21.0525352,2.47059659 21.7607042,2.17514205 22.5138028,2.17514205 C23.266831,2.17514205 23.9750704,2.47059659 24.5073944,3.00745739 C24.9195775,3.42365057 25.5890141,3.42365057 26.0011972,3.00745739 C26.5340141,2.47059659 27.2416901,2.17514205 27.9942958,2.17514205 C28.746831,2.17514205 29.454507,2.47059659 29.9878873,3.00802557 C30.5202113,3.54488636 30.8137324,4.25852273 30.8137324,5.01754261 C30.8137324,5.77705966 30.5202113,6.49019886 29.9869014,7.02762784 L25.2544366,11.8019886 L20.5203521,7.02762784 C19.9879577,6.49076705 19.6949296,5.77705966 19.6949296,5.01754261 Z M41.2246479,14.3738636 L41.2246479,21.1385653 L8.77535211,21.1385653 L8.77535211,14.3738636 L41.2246479,14.3738636 Z M8.77535211,23.2693182 L41.2246479,23.2693182 L41.2246479,30.0340199 L8.77535211,30.0340199 L8.77535211,23.2693182 Z M7.71901408,32.1647017 L42.2809859,32.1647017 L47.8526761,32.1647017 L47.8526761,38.9294034 L2.14732394,38.9294034 L2.14732394,32.1647017 L7.71901408,32.1647017 Z M2.14732394,47.8247869 L2.14732394,41.0601562 L47.8526761,41.0601562 L47.8526761,47.8247869 L2.14732394,47.8247869 Z' id='Shape' />
                  </g>
                </g>
              </svg>
            </div>
            <h3>{Data.reception}</h3>
            <h4>{Data.location}</h4>
            <p>{Data.receptionTime}</p> <br />
            <p>{Data.address}</p>
          </section>
        </div>
      </div>
    );
  }
}
export default Details;
