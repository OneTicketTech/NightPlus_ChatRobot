import { db } from '../../runtime/db'
import Exception from '../../libs/exception'

const Book = db.Book

export function get (req: any, res: any, next: any) {
	(async() => {
		const _id = req.params.id
		const book = await Book.find({ _id, isDeleted: false })
		if (!book) throw new Exception(404, `Cannot find book: ${_id}`)
		res.apiSuccess(book)
	})().catch((error) => {
		res.spiError(error)
	})
}
