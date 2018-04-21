package pl.rafallab.model;

import java.util.List;

public interface BookService {

	
	public List<Book> getAllBooks();
	public Book getBookById(Long id);
	public void editBook(Book book, Long id);
	public void addtBook(Book book , Long id);
	public Book deleteBook(Long id);
	
	
	
	
}
