#include <iostream>
using namespace std;

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin>> n;
        int a[n];
        for(int i = 0; i<n; i++)
        {
            cin>> a[i];
        }
        long long ans = 0;
        long long mn = LLONG_MAX;

        for (int i = 0; i < n; i++)
        {
            mn = min(mn, (long long)a[i]);
            ans += mn;
        }

        cout << ans << '\n';
    }
    return 0;
}