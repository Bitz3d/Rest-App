package pl.rafallab.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class MemoryBookService {

	List<Book> booksList;

	public MemoryBookService() {
		booksList = new ArrayList<Book>();
		booksList.add(new Book(1L, "9788324631766", "Thinking in Java", "Bruce Eckel", "Helion", "programming"));
		booksList.add(new Book(2L, "9788324627738", "Rusz glowa, Java.", "Sierra Kathy, Bates Bert", "Helion",
				"programming"));
		booksList.add(new Book(3L, "9780130819338", "Java 2. Podstawy", "Cay Horstmann, Gary Cornell", "Helion",
				"programming"));
	}

	public List<Book> getAllBooks() {

		return booksList;

	}

	public Book getBookById(Long id) {

		for (Book book : booksList) {

			if (book.getId().equals(id)) {

				return book;

			}

		}
		return null;
	}

	public void editBook(Book book, Long id) {

		for (Book bookToCheck : booksList) {

			if (bookToCheck.getId().equals(id)) {

				booksList.remove(bookToCheck);
				booksList.add(book);

			}

		}

	}

	public void deleteBook(Long id) {

		for (Book bookToCheck : booksList) {

			if (bookToCheck.getId().equals(id)) {

				booksList.remove(bookToCheck);

			}

		}

	}

}
