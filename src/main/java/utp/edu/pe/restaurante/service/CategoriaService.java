package utp.edu.pe.restaurante.service;

import java.util.List;
import java.util.Optional;

import utp.edu.pe.restaurante.entity.Categoria;

public interface CategoriaService {
	
	 	List<Categoria> findAll();
	    Optional<Categoria> findById(Long id);
	    Categoria save(Categoria categoria);
	    Categoria update(Long id, Categoria categoria);
	  
	    
	    
	    // Eliminación lógica: desactiva categoría y sus platos
	    void desactivarCategoriaYPlatos(Long id);
	    // Reactivar categoría y platos
	    Categoria reactivarCategoria(Long id);
	    
	  
	    List<Categoria> findAllActive();
	    List<Categoria> findByTipo(Categoria.TipoCategoria tipo);
	    List<Categoria> findCategoriesWithActivePlatos();
	    boolean existsByNombre(String nombre);
	    void validateCategoriaHasNoPlatos(Long categoriaId);

}
