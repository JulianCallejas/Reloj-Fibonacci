import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function GraficoFibonacci(props) {

    const generarSerie = () => {
        var serieFibonacci = [];
        props.lista.map((item, index) => {
            serieFibonacci.push(
                { "serie-Fibonacci": item }
            )
            return null
        }
        )
        return serieFibonacci;
    }

    const serie =
    {
        data: generarSerie(),
    };

    return (
        <ResponsiveContainer width="100%" height="60%">
            <LineChart
                width={500}
                height={500}
                data={serie.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <Tooltip />
                <XAxis />
                <YAxis />
                <Legend />
                <Line type="monotone" dataKey="serie-Fibonacci" stroke="#014909" dot={false} strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>

    )
}
export default GraficoFibonacci;
