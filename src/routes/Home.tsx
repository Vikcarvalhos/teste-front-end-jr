import React, { useEffect, useState } from 'react';
import '../style/style.css';
import '../style/home.css';
import Tecnologia from '../assets/images/TecnologiaIcon.svg';
import Supermercado from '../assets/images/Supermercado.svg';
import Bebidas from '../assets/images/Bebidas.svg';
import Ferramentas from '../assets/images/Ferramentas.svg';
import Saude from '../assets/images/Saude.svg';
import Esportes from '../assets/images/Esportes.svg';
import Moda from '../assets/images/Moda.svg';
import Left from '../assets/icons/LeftArrow.svg';
import Right from '../assets/icons/RightArrow.svg';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const productsPerSlide = 4;

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Erro ao carregar os produtos:', error));
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / productsPerSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / productsPerSlide)) % Math.ceil(products.length / productsPerSlide));
  };

  const openModal = (product: Product) => {
    setModalProduct(product);
    setQuantity(1);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const startIndex = currentSlide * productsPerSlide;
  const visibleProducts = products.slice(startIndex, startIndex + productsPerSlide);

  return (
    <main className="main-container">
      {/* Primeira Seção: Banner de Promoções */}
      <section className="promo-banner">
        <div className="banner-content">
          <h1>Venha conhecer nossas promoções</h1>
          <p>50% Off nos produtos</p>
          <a href="/produtos" className="btn">Ver produto</a>
        </div>
      </section>

      {/* Segunda Seção: Categorias de Produtos */}
      <section className="product-categories">
        <div className='category-card'>
          <div className='category-img'>
            <img src={Tecnologia} alt="Tecnologia" />
          </div>
          <p className='selected-category'>
            Tecnologia
          </p>
        </div>
        <div className='category-card'>
          <div className='category-img'>
            <img src={Supermercado} alt="Supermercado" />
          </div>
          <p>
            Supermercado
          </p>
        </div>
        <div className='category-card'>
          <div className='category-img'>
            <img src={Bebidas} alt="Bebidas" />
          </div>
          <p>
            Bebidas
          </p>
        </div>
        <div className='category-card'>
          <div className='category-img'>
            <img src={Ferramentas} alt="Ferramentas" />
          </div>
          <p>
            Ferramentas
          </p>
        </div>
        <div className='category-card'>
          <div className='category-img'>
            <img src={Saude} alt="Saúde" />
          </div>
          <p>
            Saúde
          </p>
        </div>
        <div className='category-card'>
          <div className='category-img'>
            <img src={Esportes} alt="Esportes e Fitness" />
          </div>
          <p>
            Esportes e Fitness
          </p>
        </div>
        <div className='category-card'>
          <div className='category-img'>
            <img src={Moda} alt="Moda" />
          </div>
          <p>
            Moda
          </p>
        </div>
      </section>

      {/* Terceira Seção: Produtos Relacionados */}
      <section className="related-products">
        {/* Título "Produtos Relacionados" com linhas horizontais */}
        <h2 className="related-title">
          <span className="line"></span>
          Produtos relacionados
          <span className="line"></span>
        </h2>

        {/* Lista de categorias */}
        <ul className="related-products-category">
          <li>Celular</li>
          <li>Acessórios</li>
          <li>Tablets</li>
          <li>Notebooks</li>
          <li>TVs</li>
          <li>Ver Todos</li>
        </ul>

        {/* Carrossel dos produtos */}
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}><img src={Left} alt="Previous" /></button>
          <div className="product-cards">
            {visibleProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.photo} alt={product.productName} />
                <h3>{product.productName}</h3>
                <p className='cut-price'>R$ {(product.price + (product.price * 0.10)) .toFixed(2)}</p>
                <p className="price">R$ {(product.price).toFixed(2)}</p>
                <p className='credit'>ou 2x de R$ {(product.price * 0.10 / 2).toFixed(2)} sem juros</p>
                <p className='shipping-value'>Frete grátis</p>
                <button className="buy-button" onClick={() => openModal(product)}>Comprar</button>
              </div>
            ))}
          </div>
          <button className="carousel-button next" onClick={nextSlide}><img src={Right} alt="Next" /></button>
        </div>
      </section>

      <section className="partners-section">
        <div className="partner-card">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className="btn">CONFIRA</button>
        </div>
        <div className="partner-card">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className="btn">CONFIRA</button>
        </div>
      </section>


      <section className="related-section">
        <div className='related-container'>
          <h2 className="related-title">
              <span className="line"></span>
              Produtos relacionados
              <span className="line"></span>
          </h2>
          <p>Ver todos</p>
        </div>
        <div className='related-cards'>
          <div className="related-card">
            <h3>Produtos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button className="btn">CONFIRA</button>
          </div>
          <div className="related-card">
            <h3>Produtos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button className="btn">CONFIRA</button>
          </div>
        </div>
        
      </section>

      {modalProduct && (
        <div className="modal">
          <div className="modal-content">
            <img src={modalProduct.photo} alt={modalProduct.productName} className="modal-image" />
            <div className="modal-details">
              <h3>{modalProduct.productName}</h3>
              <p className="price">R$ {(modalProduct.price).toFixed(2)}</p>
              <p className='product-description'>{modalProduct.descriptionShort}</p>
              <p className="more-details">Veja mais detalhes do produto &gt;</p>
              <div className="quantity-control">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button className="buy-button">Comprar</button>
            </div>
            <button className="close-modal" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
