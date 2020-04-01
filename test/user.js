let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let axios = require('axios');

chai.use(chaiHttp);

describe('Plan de login', async ()=>{
    it("DTO Invalido - propiedad invalida", (done) =>{
        chai.request("http://localhost:3000")
        .post('/login')
        .send({notProperty:"username"})
        .end((err, res) =>{
            res.should.have.status(422);
            done();
        });
    });

    it("DTO Invalido - dato  de propiedad incorrecto", (done) =>{
        chai.request("http://localhost:3000")
        .post('/login')
        .send({username:0})
        .end((err, res) =>{
            res.should.have.status(422);
            done();
        });
    })

    it("Generar token", (done) =>{
        chai.request("http://localhost:3000")
        .post('/login')
        .send({username:"username"})
        .end((err, res) =>{
            res.should.have.status(200);
            res.text.should.be.a('string');
            done();
        });
    })
});

describe('Plan de verificacion',async ()=>{
    let token = '';

    before(async () =>{
        let res = await axios.post('http://localhost:3000/login',{ username: "username"});
        token = res.data;
      });

    it("token valido", (done) =>{
        chai.request("http://localhost:3000")
        .get('/verify')
        .set('Authorization', token)
        .end((err, res) =>{
            res.should.have.status(200);
            res.text.should.be.a('string');
            res.text.should.equal("Verificado");
            done();
        });
    });

    it("token invalido", (done) =>{
        let notToken = token + "invalido";
        chai.request("http://localhost:3000")
        .get('/verify')
        .set('Authorization', notToken)
        .end((err, res) =>{
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.equal("token no valido");
            done();
        });
    });

    it("sin token", (done) =>{
        chai.request("http://localhost:3000")
        .get('/verify')
        .end((err, res) =>{
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.equal("token no valido");
            done();
        });
    });
});