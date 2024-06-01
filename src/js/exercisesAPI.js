export default async function getExercise(id) {
    try {
        const res = await fetch(
            `https://energyflow.b.goit.study/api/exercises/${id}`
        );
        const data = await res.json();
        // console.log(data)
        return data;
    } catch (err) {
        console.log('err', err);
    }
}